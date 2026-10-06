import seo from "@/seo.json";

// ponytail: set VITE_SITE_URL in Vercel to the real .ai domain
const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "https://abstract-technology.ai").replace(/\/$/, "");

export function pageHead(path: keyof typeof seo.pages) {
  const p = seo.pages[path];
  const url = SITE_URL + (path === "/" ? "" : path);
  const image = SITE_URL + p.image;
  return {
    meta: [
      { title: p.title },
      { name: "description", content: p.description },
      { property: "og:site_name", content: seo.siteName },
      { property: "og:type", content: "website" },
      { property: "og:title", content: p.title },
      { property: "og:description", content: p.description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "1200" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: p.title },
      { name: "twitter:description", content: p.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
