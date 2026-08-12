<script lang="ts" setup>
import { linksPageSchema } from "~/data/link.schema";
import { personSchema } from "~/data/person.schema";
import { websiteSchema } from "~/data/website.schema";

useSeoMeta({
  title: "Alexandre Larue — Liens",
  description:
    "Retrouvez tous les liens d’Alexandre Larue : portfolio, projets, réseaux sociaux et services de développement web freelance.",

  ogTitle: "Alexandre Larue — Tous mes liens",
  ogDescription:
    "Portfolio, projets, réseaux sociaux et services de développement web freelance.",
  ogType: "website",
  ogUrl: "https://alexandre-larue.fr/links",
  ogSiteName: "Alexandre Larue",

  twitterCard: "summary",
  twitterTitle: "Alexandre Larue — Tous mes liens",
  twitterDescription:
    "Portfolio, projets, réseaux sociaux et services de développement web freelance.",

  robots: "index, follow",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://alexandre-larue.fr/links",
    },
  ],

  script: [
    {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [personSchema, websiteSchema, linksPageSchema],
      }),
    },
  ],
});

const links = [
  {
    label: "Mon portfolio",
    description: "Découvrez mes projets et mon parcours",
    icon: "lucide:globe",
    href: "https://alexandre-larue.fr",
  },
  {
    label: "GitHub",
    description: "Mes projets open source et expérimentations",
    icon: "lucide:github",
    href: "https://github.com/Karssou",
  },
  {
    label: "LinkedIn",
    description: "Mon profil professionnel",
    icon: "lucide:linkedin",
    href: "https://linkedin.com/in/alexandre-larue44",
  },
  {
    label: "Malt",
    description: "Mes services freelance",
    icon: "lucide:briefcase-business",
    href: "https://www.malt.fr/profile/alexandrelarue",
  },
];

const socials = [
  {
    icon: "lucide:github",
    href: "https://github.com/Karssou",
  },
  {
    icon: "lucide:linkedin",
    href: "https://linkedin.com/in/alexandre-larue44",
  },
  {
    icon: "lucide:mail",
    href: "mailto:contact@alexandre-larue.fr",
  },
];
</script>

<template>
  <main
    class="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-12"
  >
    <section
      class="relative mt-20 z-10 flex w-full max-w-xl flex-col items-center"
    >
      <div class="mb-8 flex flex-col items-center text-center">
        <div
          class="mb-4 size-24 overflow-hidden rounded-full border border-border-default bg-muted shadow-lg"
        >
          <NuxtImg
            src="/images/alexandre-larue-developpeur-web-freelance-full-stack.avif"
            alt="Alexandre Larue"
            class="size-full object-cover"
          />
        </div>

        <h1 class="text-2xl uppercase text-primary font-bold tracking-tight">
          Alexandre Larue
        </h1>

        <p class="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Développeur Web Full Stack DevOps oriented
        </p>
      </div>

      <div class="flex w-full flex-col gap-3">
        <NuxtLink
          v-for="link in links"
          :key="link.label"
          :to="link.href"
          target="_blank"
          class="group relative flex items-center gap-4 rounded-2xl border border-border-default bg-background/60 px-5 py-4 shadow-sm backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-background/80 hover:shadow-lg active:translate-y-0"
        >
          <div
            class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted/70 transition-colors group-hover:bg-primary/10"
          >
            <Icon
              :name="link.icon"
              class="size-5 text-muted-foreground transition-colors group-hover:text-primary"
            />
          </div>

          <div class="min-w-0 flex-1">
            <p class="font-medium">
              {{ link.label }}
            </p>

            <p class="mt-0.5 truncate text-sm text-muted-foreground">
              {{ link.description }}
            </p>
          </div>

          <Icon
            name="lucide:arrow-up-right"
            class="size-5 text-muted-foreground/50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
          />
        </NuxtLink>
      </div>

      <div class="mt-8 flex items-center gap-3">
        <NuxtLink
          v-for="social in socials"
          :key="social.icon"
          :to="social.href"
          target="_blank"
          class="flex size-10 items-center justify-center rounded-full border border-border-default bg-background/60 text-muted-foreground backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
        >
          <Icon :name="social.icon" class="size-4" />
        </NuxtLink>
      </div>

      <p class="mt-8 text-xs text-muted-foreground/60">alexandre-larue.fr</p>
    </section>
  </main>
</template>
