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

  routeRules: {
    "/stats/script.js": { proxy: "https://cloud.umami.is/script.js" },
    "/stats/api/send": { proxy: "https://cloud.umami.is/api/send" },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
    },
  },

  $production: {
    app: {
      head: {
        meta: [
          { name: "theme-color", content: "#ff9d00" },
          {
            name: "theme-color",
            content: "#0a0a0a",
          },
        ],
        script: [
          {
            src: "/stats/script.js",
            defer: true,
            "data-website-id": "f6b80b6c-10ec-438b-a605-0dbb841a5c8b",
            "data-host-url": "/stats",
          },
        ],
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
    "nuxt-og-image",
    "nuxt-rate-limit",
    "nuxt-seo-utils",
    "nuxt-schema-org",
    "nuxt-link-checker",
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
      Sora: [400, 700],
      "Stack Sans Headline": true,
    },
  },

  sourcemap: {
    server: false,
    client: false,
  },

  site: {
    url: "https://alexandre-larue.fr",
    name: "Alexandre LARUE | Développeur Full-Stack NuxtJS Python Typescript",
    indexable: true,
    description:
      "Développeur Full Stack Freelance à Nantes. Concepteur d'applications web modernes, rapides et ultra-performantes. Spécialisé sur l'écosystème Vue / Nuxt, FastAPI.",
    defaultLocale: "fr",
  },

  sitemap: {
    zeroRuntime: true,
    autoLastmod: true,
    autoI18n: true,
  },

  schemaOrg: {
    identity: {
      type: "Person",
      name: "Alexandre Larue",
      url: "https://alexandre-larue.fr",
      telephone: "06 45 06 17 35",
      email: "contact@alexandre-larue.fr",
      address: {
        type: "PostalAddress",
        streetAddress: "3 rue eugène barrault",
      },
      image:
        "https://alexandre-larue.fr/images/alexandre-larue-developpeur-web-freelance-full-stack.avif",
      jobTitle: "Développeur Full Stack Freelance & Architecture cloud",
      description:
        "Portfolio d'Alexandre Larue – Développeur Web Full Stack à Nantes.Expert Nuxt, Vue.js, FastAPI et Docker. Découvrez mes projets, mon stack technique et mes réalisations en développement d'applications web et cloud.",
      knowsAbout: [
        "Python",
        "FastAPI",
        "TypeScript",
        "Nuxt",
        "Vue.js",
        "Docker",
        "Linux",
        "PostgreSQL",
        "MinIO",
        "Cloud Computing",
        "DevOps",
      ],
      sameAs: [
        "https://github.com/Karssou",
        "https://linkedin.com/in/alexandre-larue44",
        "https://www.malt.fr/profile/alexandrelarue",
        "https://fr.fiverr.com/s/XLGgggZ",
        "https://www.instagram.com/alexandre.larue.dev/",
      ],
      worksFor: {
        type: "Organization",
        name: "Alexandre Larue",
        url: "https://alexandre-larue.fr",
      },
      alumniOf: [
        {
          type: "EducationalOrganization",
          name: "Saint-Félix",
        },
      ],
      hasOccupation: {
        type: "Occupation",
        name: "Full Stack Developer",
        occupationalCategory: "Software Developer",
        description:
          "Développeur spécialisé dans les applications web modernes, les architectures backend et les technologies Cloud.",
      },
      knowsLanguage: ["French", "English", "Spanish"],
      contactPoint: {
        type: "ContactPoint",
        contactType: "professional inquiries",
        url: "https://alexandre-larue.fr/#contact",
      },
    },
  },
});
