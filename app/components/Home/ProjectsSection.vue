<script lang="ts" setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const { t, tm } = useI18n();

const projects = computed(
  () =>
    tm("projects.items") as Array<{
      title: string;
      description: string;
      stack: string[];
      status: string;
      href: string;
      cta: string;
    }>,
);
</script>

<template>
  <section class="flex flex-col gap-8">
    <HomeSectionHeading
      kicker="Work"
      :title="t('projects.title')"
      :description="t('projects.lead')"
    />

    <div class="grid gap-4 lg:grid-cols-3">
      <article
        v-for="(project, index) in projects"
        :key="project.title"
        data-card
        class="group flex h-full flex-col justify-between rounded-[1.75rem] border border-border-default bg-surface/70 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-bg-hovered"
        :class="
          index === 2
            ? ' border border-primary/30 shadow-xl shadow-primary/10'
            : ''
        "
        :data-delay="index * 120"
      >
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between gap-3">
            <span
              class="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              {{ project.status }}
            </span>
            <Icon
              icon="material-symbols:code-rounded"
              class="size-6 text-primary transition-transform duration-300 group-hover:rotate-6"
            />
          </div>

          <div>
            <h3
              class="font-['Share Tech'] text-3xl font-bold uppercase tracking-tight"
            >
              {{ project.title }}
            </h3>
            <p class="mt-3 font-sora text-sm leading-7 text-muted">
              {{ project.description }}
            </p>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="rounded-full border border-border-default bg-surface/80 px-3 py-1 text-xs font-medium text-default"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <NuxtLink
          :to="project.href"
          class="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
          :class="
            index === 2
              ? 'border bg-transparent border-primary text-primary'
              : 'text-white'
          "
        >
          {{ project.cta }}
          <Icon icon="material-symbols:arrow-forward-rounded" class="size-5" />
        </NuxtLink>
      </article>
    </div>
  </section>
</template>
