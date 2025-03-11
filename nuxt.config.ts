export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./locales/i18n.config.ts",
  },
  tailwindcss: {
    cssPath: "~/src/app/assets/css/tailwind.css",
  },
  icon: {
    customCollections: [
      {
        prefix: "xi-i",
        dir: "./src/app/assets/icons",
      },
    ],
  },
  ui: {
    global: true,
  },
  colorMode: {
    preference: "dark",
  },
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/x-install--landing-page/" : "/",
    head: {
      link: [
        {
          rel: "stylesheet",
          href: `${
            process.env.NODE_ENV === "production"
              ? "/x-install--landing-page"
              : ""
          }/fonts/sf-pro-display/sf-pro-display.style.css`,
        },
      ],
    },
  },
  dir: {
    pages: "./src/app/routes",
    layouts: "./src/app/layouts",
    assets: "./src/app/assets",
    middleware: "./src/app/middlewares",
    app: "./src/app",
  },
  imports: {
    dirs: [
      "./src/shared/*/index.ts",
      "./src/entities/*/*/index.ts",
      "./src/features/*/*/index.ts",
      "./src/widgets/*/*/index.ts",
    ],
  },
  components: {
    dirs: [
      {
        path: "~/src/shared",
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          component.pascalName = "Ui" + component.pascalName;
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/entities",
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/entities",
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          component.pascalName = component.pascalName + "Feature";
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/features",
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          component.pascalName = component.pascalName + "Feature";
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/widgets",
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          component.pascalName = component.pascalName + "Widget";
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
      {
        path: "~/src/pages",
        extendComponent(component) {
          component.pascalName = component.pascalName.replaceAll("Ui", "");
          return component;
        },
        pattern: "**/*index.vue",
        extensions: ["vue"],
      },
    ],
  },
});
