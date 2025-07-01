import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    typeCheck: true,
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Nuxt 3 Starter",
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },
  runtimeConfig: {
    // public 中的键也会暴露到客户端
    public: {
      apiBase: "/api",
    },
  },
});
