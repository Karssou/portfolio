<script setup lang="ts">
import { personSchema } from "@/data/person.schema";
import { websiteSchema } from "~/data/website.schema";

useHead({
  script: [
    {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [personSchema, websiteSchema],
      }),
    },
  ],
});
useSeoMeta({
  title: "Alexandre Larue | Développeur Full-Stack",
  description:
    "Site personnel d'Alexandre Larue, développeur junior orienté Nuxt, Vue et interfaces modernes.",

  ogTitle: "Alexandre Larue | Portfolio",
  ogDescription:
    "Site personnel d'Alexandre Larue, développeur junior orienté Nuxt, Vue et interfaces modernes.",
  ogImage:
    "https://alexandre-larue.fr/images/alexandre-larue-developpeur-web-freelance-full-stack.avif",

  twitterCard: "summary_large_image",
  twitterImage:
    "https://alexandre-larue.fr/images/alexandre-larue-developpeur-web-freelance-full-stack.avif",
});

const { t } = useI18n();
</script>

<template>
  <div>
    <main class="relative overflow-x-hidden pb-36">
      <div class="pointer-events-none absolute inset-0 -z-10">
        <div
          data-orb
          class="absolute left-0 top-0 h-72 w-72 -translate-x-1/3 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          data-orb
          class="absolute bottom-24 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      <section id="home" class="scroll-mt-28 px-6 pt-28 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-7xl">
          <div class="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div class="grid gap-6">
              <MainTitle />

              <article
                class="rounded-4xl border border-border-default bg-surface/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl"
              >
                <p class="text-sm uppercase tracking-[0.25em] text-muted">
                  Vue d'ensemble
                </p>
                <p class="mt-3 font-sora text-base leading-7 text-default">
                  {{ t("mainTitle.ensemble") }}
                </p>
              </article>
            </div>

            <div class="grid gap-4">
              <article
                class="group overflow-hidden rounded-4xl border border-border-default bg-linear-to-br from-primary/15 via-surface/70 to-surface/60 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl"
              >
                <figure
                  class="relative aspect-4/5 overflow-hidden rounded-[1.65rem] border border-border-default/70 bg-surface/40"
                >
                  <NuxtImg
                    src="/images/alexandre-larue-developpeur-web-freelance-full-stack.avif"
                    alt="Portrait d'Alexandre Larue"
                    class="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    width="1358"
                    height="1286"
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    loading="eager"
                    format="avif"
                    quality="78"
                    preload
                    placeholder
                  />

                  <div
                    class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent"
                  />

                  <figcaption
                    class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5"
                  >
                    <span
                      class="inline-flex max-w-[85%] items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 font-sora text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md"
                    >
                      <span class="size-2 rounded-full bg-primary" />
                      Portrait d'Alexandre Larue
                    </span>
                  </figcaption>
                </figure>
              </article>

              <article
                class="rounded-4xl border border-border-default bg-linear-to-br from-primary/15 via-surface/70 to-surface/60 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl"
              >
                <p class="text-sm uppercase tracking-[0.25em] text-muted">
                  Navigation
                </p>
                <div class="mt-4 grid gap-3 sm:grid-cols-2">
                  <NuxtLink
                    to="#projects"
                    class="rounded-2xl border border-border-default bg-surface/70 px-4 py-3 font-sora text-sm font-semibold transition-colors duration-300 hover:bg-bg-hovered"
                  >
                    Aller aux projets
                  </NuxtLink>
                  <NuxtLink
                    to="#contact"
                    class="rounded-2xl border border-border-default bg-surface/70 px-4 py-3 font-sora text-sm font-semibold transition-colors duration-300 hover:bg-bg-hovered"
                  >
                    Aller au contact
                  </NuxtLink>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="scroll-mt-28 px-6 pt-24 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-7xl" data-section>
          <LazyHomeProjectsSection />
        </div>
      </section>

      <section id="about" class="scroll-mt-28 px-6 pt-24 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-7xl" data-section>
          <LazyHomeAboutSection />
        </div>
      </section>

      <section id="skills" class="scroll-mt-28 px-6 pt-24 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-7xl" data-section>
          <LazyHomeSectionHeading
            kicker="Skills"
            :title="$t('navbar.skills')"
            :description="$t('skill.description')"
          />
          <div class="mt-8">
            <LazySkills />
          </div>
        </div>
      </section>

      <section id="education" class="scroll-mt-28 px-6 pt-24 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-7xl" data-section>
          <div class="grid gap-8">
            <LazySkillsEducation />
            <LazySkillsLanguage />
          </div>
        </div>
      </section>

      <section id="contact" class="scroll-mt-28 px-6 pt-24 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-7xl" data-section>
          <LazyHomeContactSection />
        </div>
      </section>
    </main>
    <footer class="flex items-center justify-center text-muted">
      <p class="pb-4">&copy; 2026 Alexandre LARUE. Tous droits réservés.</p>
    </footer>
  </div>
</template>
