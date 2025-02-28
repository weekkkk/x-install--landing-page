export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["@nuxt/image", "@nuxt/ui"],
  tailwindcss: {
    cssPath: "~/src/app/assets/css/tailwind.css",
  },
  ui: {
    global: true,
  },
  colorMode: {
    preference: "dark",
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "/fonts/sf-pro-display/sf-pro-display.style.css",
        },
      ],
    },
  },
});
