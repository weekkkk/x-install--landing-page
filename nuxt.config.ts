export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["@nuxt/image", "@nuxt/ui"],
  ui: {
    global: true,
  },
  colorMode: {
    preference: "dark",
  },
});
