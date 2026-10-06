// Social crawlers don't run JS, so bake each page's <head> meta into static HTML after build.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const seo = JSON.parse(readFileSync("src/seo.json", "utf8"));
const site = (process.env.VITE_SITE_URL ?? "https://abstract-technology.ai").replace(/\/$/, "");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const html = readFileSync("dist/index.html", "utf8");

for (const [path, p] of Object.entries(seo.pages)) {
  const url = site + (path === "/" ? "" : path);
  const image = site + p.image;
  const tags = [
    ["name", "description", p.description],
    ["property", "og:site_name", seo.siteName],
    ["property", "og:type", "website"],
    ["property", "og:title", p.title],
    ["property", "og:description", p.description],
    ["property", "og:url", url],
    ["property", "og:image", image],
    ["property", "og:image:width", "1600"],
    ["property", "og:image:height", "1200"],
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", p.title],
    ["name", "twitter:description", p.description],
    ["name", "twitter:image", image],
  ].map(([k, n, c]) => `<meta ${k}="${n}" content="${esc(c)}" />`);
  tags.push(`<link rel="canonical" href="${url}" />`);
  const out = html
    .replace(/<title>.*?<\/title>/, `<title>${esc(p.title)}</title>`)
    .replace("</head>", `    ${tags.join("\n    ")}\n  </head>`);
  const file = path === "/" ? "dist/index.html" : `dist${path}/index.html`;
  if (path !== "/") mkdirSync(`dist${path}`, { recursive: true });
  writeFileSync(file, out);
}
