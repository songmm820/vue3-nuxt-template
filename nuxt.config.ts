import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxt/ui'],
  devtools: { enabled: false },

  app: {
    rootAttrs: {
      id: '__nuxt',
    },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    },
  },

  css: ['~/assets/css/main.css'],
  ui: {
    fonts: false,
  },

  runtimeConfig: {
    // public 中的键也会暴露到客户端
    public: {
      apiBase: '/api',
    },
  },

  compatibilityDate: '2025-05-15',

  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
