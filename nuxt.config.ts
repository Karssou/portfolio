// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  icon: {
    clientBundle: {
      scan: true,
    },
    serverBundle: "local",
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
    },
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: ["/", "/en"],
      crawlLinks: true,
    },
  },

  image: {
    format: ["avif"],
  },

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
    "@nuxtjs/sitemap",
    "@nuxt/content",
    "@nuxtjs/robots",
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "fr",
    locales: [
      { code: "en", name: "English", file: "en/index.ts" },
      { code: "fr", name: "Français", file: "fr/index.ts" },
    ],

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  googleFonts: {
    display: "swap",
    preconnect: true,
    download: true,
    families: {
      "Share Tech": true,
      Sora: true,
      "Fjalla One": true,
    },
  },

  sourcemap: {
    server: false,
    client: false,
  },

  site: {
    url: "https://alexandre-larue.fr",
    name: "Alexandre LARUE développeur Full-Stack",
    indexable: true,
  },

  sitemap: {
    autoLastmod: true,
  },
});
