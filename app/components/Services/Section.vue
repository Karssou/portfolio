<script lang="ts" setup>
import SectionHeading from "../Home/SectionHeading.vue";

const services = [
  {
    count: 1,
    title: "Frontend Engineering",
    description:
      "Création d'interfaces utilisateurs ultra-réactives et fluides. Je transformes vos maquettes en expériences interactives mémorables, orientées conversion.",
    icon: "material-symbols:devices",
    tags: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    checks: [
      "Applications Web Progressives (PWA) & SSR",
      "Design System sur-mesure et pixel-perfect",
      "Animations fluides et interactions poussées",
    ],
  },
  {
    count: 2,
    title: "Backend & Architecture",
    description:
      "Développement d'infrastructures robustes, sécurisées et scalables. Je construis le moteur invisible mais puissant de votre application.",
    icon: "material-symbols:dns-outline-rounded",
    tags: ["FastAPI", "AdonisJS", "PostgreSQL"],
    checks: [
      "Conception d'APIs RESTful hautes performances",
      "Modélisation et optimisation de bases de données relationnelles",
      "Sécurité applicative et gestion des accès (OAuth, JWT)",
    ],
  },
  {
    count: 3,
    title: "DevOps & Déploiement",
    description:
      "Automatisation et gestion d'infrastructures cloud. Assure une disponibilité maximale et des mises à jour sans interruption de service.",
    icon: "material-symbols:cloud-sync-outline-rounded",
    tags: ["Docker", "CI/CD", "Cloud Hosting"],
    checks: [
      "Conteneurisation d'applications avec Docker",
      "Pipelines d'intégration et de déploiement continus (CI/CD)",
      "Monitoring proactif et architecture haute disponibilité (99.9%)",
    ],
  },
  {
    count: 4,
    title: "SEO & Performance Web",
    description:
      "Optimisation chirurgicale pour les moteurs de recherche et l'expérience utilisateur. Un site rapide est un site qui convertit.",
    icon: "material-symbols:speed-outline-rounded",
    tags: ["Core Web Vitals", "Technical SEO", "Analytics"],
    checks: [
      "Audit et optimisation des Core Web Vitals (Lighthouse)",
      "Stratégie de référencement technique et sémantique structurée",
    ],
  },
];
</script>

<template>
  <section
    class="flex w-full mx-auto px-4 py-12 flex-col items-center justify-center"
  >
    <SectionHeading
      title="Mon expertise"
      description="De la conception à l'optimisation, je couvre l'ensemble du cycle de vie numérique. Je déploies des solutions de pointe pour propulser votre croissance, en alliant rigueur technique et créativité."
      class="max-w-7xl w-full mx-auto mb-12 px-4"
    />
    <section class="grid gap-6 md:grid-cols-2">
      <ServicesCard
        v-for="service in services"
        :key="service.count"
        :count="service.count"
        :title="service.title"
        :description="service.description"
        :icon="service.icon"
        :tags="service.tags"
        :checks="service.checks"
      />
    </section>
  </section>
</template>
