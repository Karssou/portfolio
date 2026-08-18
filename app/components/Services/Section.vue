<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import SectionHeading from "../Home/SectionHeading.vue";

const services = [
  {
    id: "creation",
    popular: true,
    badge: "Le plus demandé",
    title: "Création Sur-Mesure",
    subtitle: "Applications Web & Sites Vitrines",
    description:
      "Conception complète de votre solution web, de la première ligne de code au déploiement. Un produit fluide, ultra-rapide et taillé pour votre croissance.",
    deliverables: [
      "Architecture Nuxt.js / Vue.js haute performance",
      "Design System responsive & expérience utilisateur (UI/UX)",
      "Back-office & API REST/GraphQL sécurisés",
      "Optimisation SEO natif et temps de chargement éclair",
    ],
    ctaText: "Lancer mon projet",
    icon: "material-symbols:rocket-launch-outline-rounded",
  },
  {
    id: "refonte",
    popular: false,
    badge: null,
    title: "Refonte & Modernisation",
    subtitle: "Migration & Refonte d'interfaces",
    description:
      "Transformez votre site ou application existante vers des technologies modernes. Améliorez le design, la vitesse et l'engagement de vos utilisateurs.",
    deliverables: [
      "Migration vers une stack moderne et pérenne",
      "Modernisation complète de l'interface graphique",
      "Correction des dettes techniques & nettoyage de code",
      "Conservation et amélioration du référencement (SEO)",
    ],
    ctaText: "Moderniser mon site",
    icon: "material-symbols:auto-fix-outline",
  },
  {
    id: "audit-perf",
    popular: false,
    badge: null,
    title: "Audit, SEO & Performance",
    subtitle: "Optimisation de sites existants",
    description:
      "Un diagnostic chirurgical pour identifier les freins à votre croissance : lenteurs, mauvaise structure SEO, failles de sécurité ou mauvaise UX.",
    deliverables: [
      "Audit Core Web Vitals & performances (Lighthouse)",
      "Optimisation du code, des images et du temps de réponse",
      "Correction des erreurs SEO techniques & balisage",
      "Rapport complet et recommandations d'optimisation",
    ],
    ctaText: "Booster mes performances",
    icon: "material-symbols:speed-outline-rounded",
  },
];
</script>

<template>
  <section
    class="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-16"
  >
    <SectionHeading
      title="Mes prestations & offres"
      description="Des solutions techniques adaptées à l'avancement de votre projet. Que vous partiez d'une feuille blanche ou d'une plateforme existante à optimiser."
      class="max-w-7xl w-full mx-auto mb-12 px-4"
    />

    <div class="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="service in services"
        :key="service.id"
        class="group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-surface/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        :class="[
          service.popular
            ? 'border-primary/50 shadow-lg shadow-primary/5'
            : 'border-border-default hover:border-primary/40',
        ]"
      >
        <!-- Badge "Populaire / Le plus demandé" -->
        <div
          v-if="service.popular"
          class="absolute top-4 right-4 rounded-full bg-primary/10 border border-primary/30 px-3 py-1 font-sora text-xs font-semibold text-primary"
        >
          {{ service.badge }}
        </div>

        <div>
          <!-- En-tête : Icône & Subtitle -->
          <div class="mb-6 flex items-center justify-between">
            <div
              class="flex size-14 items-center justify-center rounded-2xl border border-border-default bg-bg-hovered/80 text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10"
            >
              <Icon :icon="service.icon" class="size-7 shrink-0" />
            </div>
          </div>

          <!-- Titre & Description -->
          <div class="mb-6">
            <span
              class="font-sora text-xs font-medium uppercase tracking-wider text-muted"
            >
              {{ service.subtitle }}
            </span>
            <h3 class="mt-1 font-title text-2xl font-bold text-default">
              {{ service.title }}
            </h3>
            <p class="mt-3 font-sora text-sm leading-relaxed text-muted">
              {{ service.description }}
            </p>
          </div>

          <!-- Séparateur -->
          <div class="my-6 h-px w-full bg-border-default/60" />

          <!-- Liste des livrables inclus -->
          <div class="space-y-3">
            <p
              class="font-sora text-xs font-semibold uppercase tracking-wider text-default/80"
            >
              Inclus dans la prestation :
            </p>
            <ul class="space-y-2.5 font-sora text-sm text-muted">
              <li
                v-for="(deliverable, idx) in service.deliverables"
                :key="idx"
                class="flex items-start gap-3"
              >
                <Icon
                  icon="material-symbols:check-circle-outline-rounded"
                  class="mt-0.5 size-5 shrink-0 text-primary"
                />
                <span>{{ deliverable }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Action / CTA de la carte -->
        <div class="mt-8 pt-4">
          <NuxtLink
            to="/#contact"
            class="flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-3 font-sora text-sm font-semibold transition-all duration-200"
            :class="[
              service.popular
                ? 'bg-primary text-primary-foreground hover:opacity-90'
                : 'border-border-default bg-surface hover:border-primary/40 hover:text-primary',
            ]"
          >
            <span>{{ service.ctaText }}</span>
            <Icon
              icon="material-symbols:arrow-forward-rounded"
              class="size-4"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
