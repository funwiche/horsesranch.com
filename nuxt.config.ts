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
      htmlAttrs: { lang: "en", dir: "ltr" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      title: $app.title,
      titleTemplate: `%s | ${$app.name}`,
      meta: [
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#474A48" },
        { name: "robots", content: "index, follow" },
      ],
      link: [
        { rel: "image/x-icon", href: "/favicon.ico" },
        { rel: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
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
