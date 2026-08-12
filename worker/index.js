export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      return handleContactRequest(request, env);
    }

    const response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get("accept")?.includes("text/html");

    if (response.status !== 404 || !acceptsHtml || !["GET", "HEAD"].includes(request.method)) {
      return response;
    }

    const indexUrl = new URL(request.url);
    indexUrl.pathname = "/index.html";
    indexUrl.search = "";
    return env.ASSETS.fetch(new Request(indexUrl, request));
  },
};

const MAX_FIELD_LENGTH = 4000;

async function handleContactRequest(request, env) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405, { Allow: "POST" });
  }

  if (String(env.EMAIL_ENABLE).toLowerCase() !== "true") {
    return jsonResponse({ error: "Email is not enabled" }, 503);
  }

  const missingConfig = [
    "SMTP_HOST",
    "SMTP_PORT",
    "EMAIL_ADDRESS",
    "EMAIL_PASSWORD",
    "CONTACT_ENQUIRY_TO_EMAIL",
  ].filter((key) => !env[key]);

  if (missingConfig.length > 0) {
    return jsonResponse({ error: "Email configuration is incomplete", missing: missingConfig }, 500);
  }

  let payload;
  try {
    payload = sanitizePayload(await request.json());
  } catch {
    return jsonResponse({ error: "Invalid JSON payload" }, 400);
  }

  if (!payload.name || !payload.email || !payload.message) {
    return jsonResponse({ error: "Name, email, and message are required" }, 400);
  }

  try {
    await sendSmtpMail(env, {
      from: env.EMAIL_FROM || env.EMAIL_ADDRESS,
      to: env.CONTACT_ENQUIRY_TO_EMAIL,
      replyTo: payload.email,
      subject: `Invisiron ${payload.source || "Contact"} enquiry from ${payload.name}`,
      text: buildEmailText(payload),
    });
  } catch (error) {
    return jsonResponse({ error: "Email delivery failed", detail: error.message }, 502);
  }

  return jsonResponse({ ok: true });
}

function sanitizePayload(input) {
  const payload = {};
  for (const [key, value] of Object.entries(input || {})) {
    payload[key] = String(value ?? "").trim().slice(0, MAX_FIELD_LENGTH);
  }
  return payload;
}

function buildEmailText(payload) {
  const labels = [
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
  ];

  return labels
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

async function sendSmtpMail(env, message) {
  const { connect } = await import("cloudflare:sockets");
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const socket = connect(
    {
      hostname: env.SMTP_HOST,
      port: Number(env.SMTP_PORT),
    },
    { secureTransport: String(env.SMTP_SECURE).toLowerCase() === "true" ? "on" : "off" },
  );
  const reader = socket.readable.getReader();
  const writer = socket.writable.getWriter();

  const readLine = createLineReader(reader, decoder);
  const expect = async (codes) => {
    const lines = [];
    let line;
    do {
      line = await readLine();
      lines.push(line);
    } while (/^\d{3}-/.test(line));

    const code = Number(line.slice(0, 3));
    if (!codes.includes(code)) throw new Error(lines.join("\n"));
    return lines;
  };
  const command = async (line, codes) => {
    await writer.write(encoder.encode(`${line}\r\n`));
    return expect(codes);
  };

  try {
    await expect([220]);
    await command("EHLO invisiron.local", [250]);
    await command(`AUTH PLAIN ${btoa(`\0${env.EMAIL_ADDRESS}\0${env.EMAIL_PASSWORD}`)}`, [235]);
    await command(`MAIL FROM:<${extractEmail(message.from)}>`, [250]);
    await command(`RCPT TO:<${extractEmail(message.to)}>`, [250, 251]);
    await command("DATA", [354]);
    await writer.write(encoder.encode(formatEmail(message)));
    await expect([250]);
    await command("QUIT", [221]);
  } finally {
    reader.releaseLock();
    writer.releaseLock();
    socket.close();
  }
}

function createLineReader(reader, decoder) {
  let buffer = "";
  return async () => {
    while (!buffer.includes("\n")) {
      const { done, value } = await reader.read();
      if (done) throw new Error("SMTP connection closed unexpectedly");
      buffer += decoder.decode(value, { stream: true });
    }

    const newline = buffer.indexOf("\n");
    const line = buffer.slice(0, newline).replace(/\r$/, "");
    buffer = buffer.slice(newline + 1);
    return line;
  };
}

function formatEmail({ from, to, replyTo, subject, text }) {
  const headers = [
    `From: ${formatAddressHeader(from)}`,
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${sanitizeHeader(subject)}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
  ];

  return `${headers.join("\r\n")}\r\n\r\n${escapeEmailBody(text)}\r\n.\r\n`;
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

function escapeEmailBody(value) {
  return String(value).replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..");
}

function jsonResponse(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...headers,
    },
  });
}
