import { $app } from "./utils";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/main.css"],
  components: [{ path: "~/components", pathPrefix: false, global: true }],
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      title: $app.title,
      titleTemplate: `%s - ${$app.name}`,
      meta: [
        { charset: "utf-8" },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "description",
          content: $app.desc,
        },
        { name: "og:locale", content: "en_US" },
        { name: "og:type", content: "website" },
        {
          name: "og:title",
          content: `${$app.title} - ${$app.name}`,
        },
        {
          name: "og:description",
          content: $app.desc,
        },
        {
          name: "og:site_name",
          content: $app.name,
        },
        { name: "og:url", content: `https://${$app.domain}` },
      ],
      link: [
        { rel: "image/x-icon", href: "/favicon.ico" },
        // { rel: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        // { rel: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        {
          rel: "stylesheet",
          href: "https://xtremnet.vercel.app/fonts/fontawesome/css/all.min.css",
        },
      ],
    },
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
