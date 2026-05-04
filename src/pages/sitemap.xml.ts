import { site } from "../data/site";

const routes = [
  "/",
  "/research",
  "/publications",
  "/code",
  "/talks",
  "/cv",
  "/contact"
];

const updated = new Date().toISOString().slice(0, 10);

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const loc = new URL(route, site.url).toString();
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${updated}</lastmod>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
