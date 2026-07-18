<script lang="ts" setup>
import type { Project } from "~/types/Project";

const { t, tm } = useI18n();
const pageRoot = ref<HTMLElement | null>(null);
const projects = computed(() => tm("projects.ProjectPage.items") as Project[]);
const featuredProject = computed(() => projects.value[0]);
const otherProjects = computed(() => projects.value);
const isExternal = (href: string) => href.startsWith("http");

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
      <header
        data-section
        class="grid gap-8 border-b border-border-default pb-10 lg:grid-cols-[1fr_auto] lg:items-end"
      >
        <div>
          <p
            class="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-primary"
          >
            <span class="h-px w-10 bg-primary" />
            {{ t("projects.ProjectPage.page.eyebrow") }}
          </p>
          <h1
            class="mt-5 max-w-3xl font-['Share Tech'] text-5xl font-bold tracking-tight uppercase leading-[0.88] sm:text-7xl lg:text-8xl"
          >
            {{ t("projects.ProjectPage.title")
            }}<span class="text-primary">.</span>
          </h1>
        </div>
        <p class="max-w-md text-sm leading-7 text-muted sm:text-base">
          {{ t("projects.ProjectPage.lead") }}
        </p>
      </header>

      <section
        v-if="otherProjects.length"
        class="border-t border-border-default pt-10"
      >
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
