// server/routes/sitemap_index.xml.ts
import { $app } from "@/utils";
import categories from "@/resources/categories.json";
import saddles from "@/resources/saddles.json";
import horses from "@/resources/horses.json";

export default defineEventHandler((event) => {
  const baseUrl = $app.url;
  // 1. Define Static Pages
  const staticPages = [
    {
      loc: "",
      priority: "1.0",
      images: [
        "/slides/01.jpg",
        "/slides/02.jpg",
        "/slides/03.jpg",
        "/slides/04.jpg",
        "/slides/05.jpg",
        "/slides/06.jpg",
      ],
    },
    {
      loc: "/about",
      priority: "0.5",
      images: [
        "/about-me.jpg",
        "/gallery/01.jpg",
        "/gallery/02.jpg",
        "/gallery/03.jpg",
        "/gallery/04.jpg",
        "/gallery/05.jpg",
        "/gallery/06.jpg",
        "/gallery/07.jpg",
        "/gallery/08.jpg",
        "/gallery/09.jpg",
        "/gallery/10.jpg",
        "/gallery/11.jpg",
        "/gallery/12.jpg",
        "/gallery/13.jpg",
        "/gallery/14.jpg",
        "/gallery/15.jpg",
        "/gallery/16.jpg",
        "/gallery/17.jpg",
        "/gallery/18.jpg",
        "/gallery/19.jpg",
        "/gallery/20.jpg",
      ],
    },
    { loc: "/contact", priority: "0.5", images: [] },
    { loc: "/faqs", priority: "0.5", images: [] },
    {
      loc: "/hauling",
      priority: "0.5",
      images: [
        "/hauling-01.jpg",
        "/hauling-02.jpg",
        "/hauling-03.jpg",
        "/hauling-04.jpg",
      ],
    },
    { loc: "/how-to-buy", priority: "0.5", images: [] },
    { loc: "/testimonials", priority: "0.5", images: [] },
    { loc: "/riding-levels", priority: "0.5", images: [] },
    { loc: "/privacy-policy", priority: "0.5", images: [] },
    { loc: "/returns-refund", priority: "0.5", images: [] },
    { loc: "/terms-of-service", priority: "0.5", images: [] },
  ];

  // 2. Dynamic Pages
  const dynamicPages = [...horses, ...saddles];

  // 3. Build XML Header with Image Namespace
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  // Helper to append a standard URL
  const addUrl = (loc: string, priority = "0.7", images: string[] = []) => {
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
  staticPages.forEach((page) => addUrl(page.loc, page.priority, page?.images));

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
