// server/routes/sitemap_index.xml.ts
import { $app } from "@/utils";
import categories from "@/resources/categories.json";
import saddles from "@/resources/saddles.json";
import horses from "@/resources/horses.json";

export default defineEventHandler((event) => {
  const baseUrl = $app.url;
  // 1. Define Static Pages
  const staticPages = [
    { loc: "", priority: "1.0" },
    { loc: "/about", priority: "0.5" },
    { loc: "/contact", priority: "0.5" },
    { loc: "/faqs", priority: "0.5" },
    { loc: "/hauling", priority: "0.5" },
    { loc: "/how-to-buy", priority: "0.5" },
    { loc: "/testimonials", priority: "0.5" },
    { loc: "/riding-levels", priority: "0.5" },
    { loc: "/privacy-policy", priority: "0.5" },
    { loc: "/returns-refund", priority: "0.5" },
    { loc: "/terms-of-service", priority: "0.5" },
  ];

  // 2. Dynamic Pages
  const dynamicPages = [...horses, ...saddles];

  // 3. Build XML Header with Image Namespace
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  // Helper to append a standard URL
  const addUrl = (loc: string, priority = "0.7", images = []) => {
    let imgTags = images
      .map(
        (img) => `
    <image:image>
      <image:loc>${baseUrl}${img}</image:loc>
    </image:image>`,
      )
      .join("");

    xml += `
  <url>
    <loc>${baseUrl}${loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>${priority}</priority>${imgTags}
  </url>`;
  };

  // --- ADD STATIC PAGES ---
  staticPages.forEach((page) => addUrl(page.loc, page.priority));

  // --- ADD CATEGORIES ---
  addUrl(`/horses`, "0.8");
  categories.forEach((cat) => addUrl(`/horses/${cat.slug}`, "0.8"));

  // --- ADD HORSES ---
  horses.forEach((horse) => {
    const loc = `/horses/${horse.category}/${horse.slug}`;
    addUrl(loc, "0.9", horse.images as any);
  });
  // --- ADD SADDLES ---
  addUrl(`/saddles`, "0.8");
  saddles.forEach((saddle) =>
    addUrl(`/saddles/${saddle.slug}`, "0.9", saddle.images as any),
  );

  xml += `\n</urlset>`;

  // 4. Set Correct Response Headers
  setResponseHeader(event, "Content-Type", "text/xml");
  return xml;
});
