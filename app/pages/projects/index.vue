<script lang="ts" setup>
import { personSchema } from "~/data/person.schema";
import { projectsCollectionPageSchema } from "~/data/projects.schema";
import { arcanePageSchema } from "~/data/projects/arcane/page.schema";
import { converterPageSchema } from "~/data/projects/converter/page.schema";
import { nohamdrivePageSchema } from "~/data/projects/nohamdrive/page.schema";

useHead({
  script: [
    {
      type: "application/ld+json",
      textContent: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          projectsCollectionPageSchema,
          nohamdrivePageSchema,
          arcanePageSchema,
          converterPageSchema,
          personSchema,
        ],
      }),
    },
  ],
});

const { t, locale } = useI18n();
const pageRoot = ref<HTMLElement | null>(null);
// const projects = computed(() => tm("projects.ProjectPage.items") as Project[]);
const otherProjects = computed(() => projects.value);

const { data: projects } = await useAsyncData(`projects-${locale.value}`, () =>
  queryCollection("projects").where("path", "LIKE", `%/${locale.value}`).all(),
);

usePortfolioMotion(pageRoot);
</script>

<template>
  <main
    ref="pageRoot"
    class="relative overflow-x-hidden px-6 pb-28 pt-32 sm:px-8 lg:px-12 lg:pt-36"
  >
    <div
      class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div
        data-orb
        class="absolute -left-32 top-20 size-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        data-orb
        class="absolute -right-20 top-1/2 size-120 rounded-full bg-primary/10 blur-3xl"
      />
    </div>

    <div class="mx-auto max-w-7xl">
      <NuxtLink
        to="/"
        class="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted transition-colors hover:text-primary"
      >
        <Icon
          name="material-symbols:arrow-back-rounded"
          class="size-5 transition-transform group-hover:-translate-x-1"
        />
        Accueil
      </NuxtLink>
      <header
        data-section
        class="grid gap-8 border-b border-border-default pb-10 lg:grid-cols-[1fr_auto] lg:items-end"
      >
        <div>
          <h1
            class="mt-5 max-w-3xl font-['Share Tech'] text-5xl font-bold tracking-tight uppercase leading-[0.88] sm:text-7xl lg:text-8xl"
          >
            {{ t("projects.ProjectPage.title")
            }}<span class="text-primary">.</span>
          </h1>
        </div>
        <p class="max-w-md text-sm leading-7 font-sora text-muted sm:text-base">
          {{ t("projects.ProjectPage.lead") }}
        </p>
      </header>

      <section v-if="projects" class="border-t border-border-default pt-10">
        <div class="grid gap-5 lg:grid-cols-2">
          <ProjectsCard
            v-for="(project, index) in otherProjects"
            :key="project.title"
            :project="project"
            :index="index"
          />
        </div>
      </section>
    </div>
  </main>
</template>
