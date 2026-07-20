<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const route = useRoute();
const pageRoot = ref<HTMLElement | null>(null);
const slug = computed(() => String(route.params.projects));

const { data: project } = await useAsyncData(
  () => `project-${slug.value}`,
  () => queryCollection("projects").path(`/projects/${slug.value}`).first(),
  { watch: [slug] },
);

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Projet introuvable" });
}

useSeoMeta({
  title: () => `${project.value?.title ?? "Projet"} — Alexandre Larue`,
  description: () => project.value?.description,
  ogTitle: () => project.value?.title,
  ogDescription: () => project.value?.description,
  ogImage: () =>
    project.value?.cover ? `/projects/${project.value.cover}` : undefined,
});

usePortfolioMotion(pageRoot);
</script>

<template>
  <main
    v-if="project"
    ref="pageRoot"
    class="relative overflow-x-hidden px-6 pb-28 pt-28 sm:px-8 lg:px-12 lg:pt-36"
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
        class="absolute -right-24 top-144 size-120 rounded-full bg-primary/10 blur-3xl"
      />
    </div>

    <div class="mx-auto max-w-7xl">
      <NuxtLink
        to="/projects"
        class="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted transition-colors hover:text-primary"
      >
        <Icon
          icon="material-symbols:arrow-back-rounded"
          class="size-5 transition-transform group-hover:-translate-x-1"
        />
        Tous les projets
      </NuxtLink>

      <header
        data-section
        class="mt-10 grid gap-10 border-b border-border-default pb-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end"
      >
        <div>
          <h1
            data-hero="title"
            class="mt-5 max-w-4xl font-['Share Tech'] text-5xl font-bold uppercase leading-[0.88] tracking-tight lg:text-7xl"
          >
            {{ project.title }}
          </h1>
          <p
            data-hero="tagline"
            class="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg"
          >
            {{ project.description }}
          </p>
        </div>

        <dl
          class="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-border-default pt-7 lg:block lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
        >
          <div class="lg:mb-7">
            <dt
              class="text-[10px] font-bold uppercase tracking-[0.2em] text-muted"
            >
              Statut
            </dt>
            <dd class="mt-2 flex items-center gap-2 text-sm font-semibold">
              <span
                class="size-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]"
              />
              {{ project.status }}
            </dd>
          </div>
          <div>
            <dt
              class="text-[10px] font-bold uppercase tracking-[0.2em] text-muted"
            >
              Année
            </dt>
            <dd class="mt-2 text-sm font-semibold">
              {{ new Date(project.date).getFullYear() }}
            </dd>
          </div>
        </dl>
      </header>

      <section
        data-section
        class="grid gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:py-14"
      >
        <div>
          <div
            class="overflow-hidden rounded-3xl border border-border-default bg-surface shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
          >
            <NuxtImg
              v-if="project.cover"
              placeholder
              :src="`/projects/${project.cover}`"
              :alt="`Aperçu du projet ${project.title}`"
              sizes="100vw sm:90vw lg:850px"
              class="aspect-video w-full object-cover"
            />
          </div>

          <div
            class="mt-10 border-t border-border-default pt-10 sm:mt-14 sm:pt-14"
          >
            <ContentRenderer
              :value="project"
              class="project-content prose mt-6 max-w-none prose-headings:font-['Share Tech'] prose-headings:uppercase prose-headings:tracking-tight prose-h2:mt-14 prose-h2:border-t prose-h2:border-border-default prose-h2:pt-8 prose-h2:text-3xl prose-h2:sm:text-4xl prose-p:leading-8 prose-p:text-muted prose-strong:text-default prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-li:text-muted prose-li:marker:text-primary"
            />
          </div>
        </div>

        <aside data-section class="lg:pt-1">
          <div
            class="sticky top-28 rounded-3xl border border-border-default bg-surface/70 p-6 backdrop-blur-xl"
          >
            <p
              class="text-[10px] font-bold uppercase tracking-[0.22em] text-muted"
            >
              Stack technique
            </p>
            <ul
              class="mt-5 flex flex-wrap gap-2"
              aria-label="Technologies utilisées"
            >
              <li v-for="technology in project.stack" :key="technology">
                <span
                  class="inline-flex rounded-full border border-border-default bg-background px-3 py-1.5 text-xs font-medium text-default"
                >
                  {{ technology }}
                </span>
              </li>
            </ul>

            <NuxtLink
              v-if="project.github"
              data-hero="cta"
              :to="project.github"
              target="_blank"
              rel="noreferrer"
              class="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3.5 text-sm font-bold text-default transition-transform hover:-translate-y-0.5"
            >
              Voir le code
              <Icon icon="mdi:github" class="size-5" />
            </NuxtLink>
            <NuxtLink
              v-if="project.website"
              data-hero="cta"
              external
              :to="project.website"
              target="_blank"
              rel="noreferrer"
              class="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-transparent border border-primary px-4 py-3.5 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
            >
              {{ project.ctaWebsite }}
            </NuxtLink>
          </div>
        </aside>
      </section>
    </div>
  </main>
</template>
