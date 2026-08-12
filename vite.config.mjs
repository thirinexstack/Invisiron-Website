import tls from "node:tls";
import { Buffer } from "node:buffer";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  build: {
    outDir: "dist/client",
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/main.tsx"],
    },
  },
  plugins: [react(), localEmailPlugin(mode)],
}));

function localEmailPlugin(mode) {
  const localEnv = loadEnv(mode, process.cwd(), "");

  return {
    name: "local-email-api",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (request, response) => {
        if (request.method !== "POST") {
          response.writeHead(405, { allow: "POST" });
          response.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        try {
          const env = { ...localEnv, ...process.env };
          if (String(env.EMAIL_ENABLE).toLowerCase() !== "true") {
            sendJson(response, 503, { error: "Email is not enabled" });
            return;
          }

          const payload = sanitizePayload(await readJson(request));
          if (!payload.name || !payload.email || !payload.message) {
            sendJson(response, 400, { error: "Name, email, and message are required" });
            return;
          }

          await sendLocalSmtpMail(env, {
            from: env.EMAIL_FROM || env.EMAIL_ADDRESS,
            to: env.CONTACT_ENQUIRY_TO_EMAIL,
            replyTo: payload.email,
            subject: `Invisiron ${payload.source || "Contact"} enquiry from ${payload.name}`,
            text: buildEmailText(payload),
          });
          sendJson(response, 200, { ok: true });
        } catch (error) {
          sendJson(response, 502, { error: "Email delivery failed", detail: error.message });
        }
      });
    },
  };
}

async function readJson(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

function sanitizePayload(input) {
  return Object.fromEntries(
    Object.entries(input || {}).map(([key, value]) => [key, String(value ?? "").trim().slice(0, 4000)]),
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

function sendJson(response, status, body) {
  response.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(body));
}

async function sendLocalSmtpMail(env, message) {
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

  try {
    await expect([220]);
    await command("EHLO invisiron.local", [250]);
    await command(`AUTH PLAIN ${Buffer.from(`\0${env.EMAIL_ADDRESS}\0${env.EMAIL_PASSWORD}`).toString("base64")}`, [235]);
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
    `Subject: ${String(subject).replace(/[\r\n]+/g, " ")}`,
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
