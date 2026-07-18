// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],

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
  ],

  vite: {
    plugins: [tailwindcss()],
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

  sourcemap: {
    server: false,
    client: false,
  },

  site: {
    url: "https://alexandre-larue.fr",
    name: "Alexandre LARUE développeur Full-Stack",
  },
});
