import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(".");
const htmlDir = path.join(root, "source-capture", "html");
const assetRoot = path.join(root, "public", "assets", "source");
const pages = [
  "home.html",
  "about.html",
  "products.html",
  "core-technology.html",
  "partners.html",
  "resources.html",
  "contact.html",
];

const wanted = new Set();
const pageOrigin = "https://invisiron.com/";

function addUrl(raw) {
  if (!raw || raw.startsWith("data:") || raw.startsWith("#")) return;
  const cleaned = raw.replace(/\\\//g, "/").replace(/&amp;/g, "&").trim();
  try {
    const url = new URL(cleaned, pageOrigin);
    if (url.hostname !== "invisiron.com") return;
    const pathname = url.pathname.toLowerCase();
    if (
      pathname.includes("/wp-content/") ||
      /\.(png|jpe?g|webp|gif|svg|mp4|webm|woff2?|ttf|otf|eot|css)$/i.test(pathname)
    ) {
      url.hash = "";
      wanted.add(url.href);
    }
  } catch {
    // Ignore malformed snippets from inline scripts/styles.
  }
}

for (const page of pages) {
  const html = await readFile(path.join(htmlDir, page), "utf8");
  for (const match of html.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)) addUrl(match[1]);
  for (const match of html.matchAll(/\b(?:srcset|data-srcset)=["']([^"']+)["']/gi)) {
    for (const candidate of match[1].split(",")) addUrl(candidate.trim().split(/\s+/)[0]);
  }
  for (const match of html.matchAll(/url\(["']?([^"')]+)["']?\)/gi)) addUrl(match[1]);
  for (const match of html.matchAll(/https?:\\?\/\\?\/invisiron\.com\\?\/[^"' )\\]+/gi)) addUrl(match[0]);
}

await mkdir(assetRoot, { recursive: true });

const manifest = [...wanted].sort().map((url) => {
  const parsed = new URL(url);
  const relative = decodeURIComponent(parsed.pathname).replace(/^\/+/, "");
  const localPath = path.join(assetRoot, relative);
  return { url, localPath, publicPath: `/assets/source/${relative}` };
});

const config = [
  "location",
  "fail",
  "create-dirs",
  "retry = 2",
  "retry-delay = 1",
  ...manifest.flatMap((asset) => [
    `url = "${asset.url}"`,
    `output = "${asset.localPath}"`,
  ]),
  "",
].join("\n");

await writeFile(path.join(root, "source-capture", "asset-manifest.json"), JSON.stringify(manifest, null, 2));
await writeFile(path.join(root, "source-capture", "download-assets.curl"), config);

console.log(`Found ${manifest.length} downloadable assets.`);
