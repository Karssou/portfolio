<script lang="ts" setup>
import { Icon } from "@iconify/vue";

defineProps<{
  project: {
    title: string;
    description: string;
    stack: string[];
    status: string;
    href: string;
    cta: string;
    github: string;
  };
  index: number;
}>();
const hasGithub = (github: string) => github.length != 0;
</script>

<template>
  <article
    data-card
    class="group relative flex min-h-80 flex-col overflow-hidden rounded-2xl border border-border-default bg-surface/70 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_70px_rgba(255,157,0,0.14)] sm:p-8"
    :data-delay="index * 120"
  >
    <div
      class="pointer-events-none absolute -right-14 -top-14 size-44 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:bg-primary/20"
    />

    <div class="relative flex items-start justify-between gap-4">
      <span
        class="rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary"
      >
        {{ project.status }}
      </span>
      <NuxtLink
        class="flex size-11 items-center justify-center rounded-2xl border border-border-default bg-background/60 text-primary transition-transform duration-500 hover:bg-background/50 hover:text-default hover:cursor-pointer"
        :to="project.github"
      >
        <Icon icon="mdi:github" class="size-6 transition-colors duration-300" />
      </NuxtLink>
    </div>

    <div class="relative mt-10">
      <h3
        class="mt-3 font-['Share Tech'] text-3xl font-bold uppercase leading-none tracking-tight sm:text-4xl"
      >
        {{ project.title }}
      </h3>
      <p class="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base">
        {{ project.description }}
      </p>
    </div>

    <div class="relative mt-auto pt-8">
      <div v-if="project.stack.length" class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.stack"
          :key="tech"
          class="rounded-full border border-border-default bg-background/60 px-3 py-1.5 text-xs font-medium text-muted"
        >
          {{ tech }}
        </span>
      </div>

      <NuxtLink
        :to="project.href"
        class="mt-7 inline-flex items-center gap-2 text-sm font-bold text-default transition-colors duration-300 hover:text-primary"
      >
        {{ project.cta }}
        <Icon
          icon="material-symbols:arrow-outward-rounded"
          class="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </NuxtLink>
    </div>
  </article>
</template>
