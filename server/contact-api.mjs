import http from "node:http";
import tls from "node:tls";
import { Buffer } from "node:buffer";

const MAX_FIELD_LENGTH = 4000;
const MAX_BODY_BYTES = 64 * 1024;
const PORT = Number(process.env.CONTACT_API_PORT || 4174);

const server = http.createServer(async (request, response) => {
  if (request.url === "/healthz") {
    sendJson(response, 200, { ok: true });
    return;
  }

  if (request.url !== "/api/contact") {
    sendJson(response, 404, { error: "Not found" });
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed" }, { Allow: "POST" });
    return;
  }

  if (String(process.env.EMAIL_ENABLE).toLowerCase() !== "true") {
    sendJson(response, 503, { error: "Email is not enabled" });
    return;
  }

  const missingConfig = [
    "SMTP_HOST",
    "SMTP_PORT",
    "EMAIL_ADDRESS",
    "EMAIL_PASSWORD",
    "CONTACT_ENQUIRY_TO_EMAIL",
  ].filter((key) => !process.env[key]);

  if (missingConfig.length > 0) {
    sendJson(response, 500, { error: "Email configuration is incomplete", missing: missingConfig });
    return;
  }

  let payload;
  try {
    payload = sanitizePayload(await readJson(request));
  } catch (error) {
    sendJson(response, 400, { error: error.message || "Invalid JSON payload" });
    return;
  }

  if (!payload.name || !payload.email || !payload.message) {
    sendJson(response, 400, { error: "Name, email, and message are required" });
    return;
  }

  try {
    await sendSmtpMail(process.env, {
      from: process.env.EMAIL_FROM || process.env.EMAIL_ADDRESS,
      to: process.env.CONTACT_ENQUIRY_TO_EMAIL,
      replyTo: payload.email,
      subject: `Invisiron ${payload.source || "Contact"} enquiry from ${payload.name}`,
      text: buildEmailText(payload),
    });
    sendJson(response, 200, { ok: true });
  } catch (error) {
    console.error("Email delivery failed:", error);
    sendJson(response, 502, { error: "Email delivery failed", detail: error.message });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Invisiron contact API listening on 127.0.0.1:${PORT}`);
});

async function readJson(request) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) throw new Error("Request body is too large");
    chunks.push(chunk);
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

function sanitizePayload(input) {
  return Object.fromEntries(
    Object.entries(input || {}).map(([key, value]) => [key, String(value ?? "").trim().slice(0, MAX_FIELD_LENGTH)]),
  );
}

function buildEmailText(payload) {
  return [
    ["Source", payload.source],
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Company", payload.company],
    ["Position", payload.position],
    ["Country", payload.country],
    ["Partner Type", payload.partnerType],
    ["Enquiry", payload.enquiry],
    ["Message", payload.message],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

async function sendSmtpMail(env, message) {
  const socket = tls.connect({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT),
    servername: env.SMTP_HOST,
  });

  socket.setEncoding("utf8");
  let buffer = "";
  const lines = [];
  socket.on("data", (chunk) => {
    buffer += chunk;
    let newline = buffer.indexOf("\n");
    while (newline >= 0) {
      lines.push(buffer.slice(0, newline).replace(/\r$/, ""));
      buffer = buffer.slice(newline + 1);
      newline = buffer.indexOf("\n");
    }
  });

  const nextLine = () =>
    new Promise((resolve, reject) => {
      const poll = () => {
        const line = lines.shift();
        if (line) resolve(line);
        else if (socket.destroyed) reject(new Error("SMTP connection closed unexpectedly"));
        else setTimeout(poll, 10);
      };
      poll();
    });

  const expect = async (codes) => {
    const responseLines = [];
    while (true) {
      const line = await nextLine();
      responseLines.push(line);
      if (!/^\d{3}-/.test(line)) {
        const code = Number(line.slice(0, 3));
        if (!codes.includes(code)) throw new Error(responseLines.join("\n"));
        return;
      }
    }
  };

  const command = async (line, codes) => {
    socket.write(`${line}\r\n`);
    await expect(codes);
  };

  try {
    await expect([220]);
    await command("EHLO invisiron.nexstack.sg", [250]);
    await command(`AUTH PLAIN ${Buffer.from(`\0${env.EMAIL_ADDRESS}\0${env.EMAIL_PASSWORD}`).toString("base64")}`, [
      235,
    ]);
    await command(`MAIL FROM:<${extractEmail(message.from)}>`, [250]);
    await command(`RCPT TO:<${extractEmail(message.to)}>`, [250, 251]);
    await command("DATA", [354]);
    socket.write(formatEmail(message));
    await expect([250]);
    await command("QUIT", [221]);
  } finally {
    socket.end();
  }
}

function formatEmail({ from, to, replyTo, subject, text }) {
  return [
    `From: ${formatAddressHeader(from)}`,
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${sanitizeHeader(subject)}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "",
    String(text).replace(/\r?\n/g, "\r\n").replace(/^\./gm, ".."),
    ".",
    "",
  ].join("\r\n");
}

function extractEmail(value) {
  const match = String(value).match(/<([^>]+)>/);
  return (match ? match[1] : value).trim();
}

function formatAddressHeader(value) {
  const input = String(value).trim();
  const match = input.match(/^(.+?)\s*<([^>]+)>$/);
  if (!match) return input;

  const name = match[1].replace(/^"|"$/g, "").replace(/["\\]/g, "\\$&");
  return `"${name}" <${match[2].trim()}>`;
}

function sanitizeHeader(value) {
  return String(value).replace(/[\r\n]+/g, " ").trim();
}

function sendJson(response, status, body, headers = {}) {
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    ...headers,
  });
  response.end(JSON.stringify(body));
}
