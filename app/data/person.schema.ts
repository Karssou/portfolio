// utils/structured-data.ts

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://alexandre-larue.fr/#webpage",
  },

  "@id": "https://alexandre-larue.fr/#person",

  name: "Alexandre Larue",
  url: "https://alexandre-larue.fr",

  image:
    "https://alexandre-larue.fr/images/alexandre-larue-developpeur-web-freelance-full-stack.avif",

  jobTitle: "Développeur Full Stack orienté Cloud",

  description:
    "Alexandre Larue est un développeur français spécialisé dans le développement Full Stack, les architectures backend, le Cloud Computing et les technologies DevOps.",

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
  ],

  worksFor: {
    "@type": "Organization",
    name: "Alexandre Larue",
    url: "https://alexandre-larue.fr",
  },

  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Saint-Félix",
  },

  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationalCategory: "Software Developer",
    description:
      "Développeur spécialisé dans les applications web modernes, les architectures backend et les technologies Cloud.",
  },

  knowsLanguage: [
    {
      "@type": "Language",
      name: "French",
    },
    {
      "@type": "Language",
      name: "English",
    },
    {
      "@type": "Language",
      name: "Spanish",
    },
  ],

  contactPoint: {
    "@type": "ContactPoint",
    contactType: "professional inquiries",
    url: "https://alexandre-larue.fr/#contact",
  },

  subjectOf: [
    {
      "@type": "SoftwareApplication",
      "@id": "https://alexandre-larue.fr/#nohamdrive",
      name: "NohamDrive",
    },
  ],
};
