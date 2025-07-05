import tailwindcss from '@tailwindcss/vite'
import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/i18n', '@nuxt/image'],
  $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
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
      link: [
        // 设置 favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  router: {
    options: {
      hashMode: true,
    },
  },

  ui: {
    fonts: false,
  },

  runtimeConfig: {
    // public 中的键也会暴露到客户端
    public: {
      apiBase: '/api',
    },
  },
  devServer: {
    port: 5777,
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
  i18n: {
    // Module Options
    defaultLocale: 'en',
    lazy: true,
    // 路由语言前缀 no_prefix | prefix | prefix_except_default | prefix_and_default
    strategy: 'no_prefix',
    // Global transition
    baseUrl: 'https://my-nuxt-app.com',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'zh', name: '中文简体', file: 'zh.json' },
    ],
  },

  image: {
  },
})
