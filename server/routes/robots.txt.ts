// server/routes/robots.txt.ts
import { $app } from "@/utils";

export default defineEventHandler((event) => {
  const robots = [
    "User-agent: *",
    "Allow: /",
    "", // Empty line for readability
    `Sitemap: ${$app.url}/sitemap.xml`,
  ].join("\n");

  setResponseHeader(event, "Content-Type", "text/plain");
  return robots;
});
