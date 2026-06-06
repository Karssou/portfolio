// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      link: [
        {
          rel: "preload",
          href: "/fonts/Share_Tech-normal-400-latin.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/Sora-normal-400-latin.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  nitro: {
    prerender: {
      // Déclenche le pré-rendu sur ces routes au moment du build
      routes: ['/', '/en'], 
      
      // Optionnel mais recommandé : crawl automatiquement tous les liens <a> trouvés 
      crawlLinks: true 
    }
  },

  // Optionnel : si tu veux forcer un format d'image par défaut (ex: webp)
  image: {
    format: ['webp']
  }

  modules: [
    "@nuxt/a11y",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/icon",
    "@nuxt/image",
    "@artmizu/nuxt-prometheus",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  nitro: {
    compressPublicAssets: true,
  },

  i18n: {
    defaultLocale: "fr",
    locales: [
      { code: "en", name: "English", file: "en/index.ts" },
      { code: "fr", name: "Français", file: "fr/index.ts" },
    ],
  },

  googleFonts: {
    display: "swap",
    preconnect: true,
    download: true,
    families: {
      "Share Tech": true,
      Sora: true,
    },
  },
});
