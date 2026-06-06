// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
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
    families: {
      "Share Tech": true,
      Sora: true,
    },
  },
});
