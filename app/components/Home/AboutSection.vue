<script lang="ts" setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const { t, tm } = useI18n();

const cards = [
  {
    icon: "material-symbols:code-blocks-rounded",
    title: "Front-end",
  },
  {
    icon: "material-symbols:database",
    title: "Back-end",
  },
  {
    icon: "material-symbols:design-services-rounded",
    title: "UI / UX",
  },
  { icon: "material-symbols:storage-rounded", title: "SEO / SERVER" },
] as const;

const aboutCards = computed(
  () =>
    tm("about.cards") as Array<{
      description: string;
    }>,
);

const highlights = computed(() => tm("about.highlights") as string[]);
</script>

<template>
  <section class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
    <HomeSectionHeading
      kicker="About"
      :title="t('about.title')"
      :description="t('about.lead')"
    />

    <div class="grid gap-4 sm:grid-cols-2">
      <article
        v-for="(card, index) in cards"
        :key="card.title"
        class="rounded-[1.75rem] border border-border-default bg-surface/70 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-bg-hovered sm:col-span-1"
      >
        <Icon :icon="card.icon" class="size-8 text-primary" />
        <h3
          class="mt-4 font-['Share Tech'] text-2xl font-bold uppercase tracking-tight"
        >
          {{ card.title }}
        </h3>
        <p class="mt-3 font-sora text-sm leading-6 text-muted">
          {{ aboutCards[index].description }}
        </p>
      </article>

      <article
        class="rounded-[1.75rem] border border-border-default bg-linear-to-br from-primary/15 via-surface/70 to-surface/60 p-6 shadow-lg backdrop-blur-xl sm:col-span-2"
      >
        <div class="flex flex-col gap-4">
          <p
            class="max-w-2xl font-sora text-sm leading-7 text-default sm:text-base"
          >
            {{ highlights[0] }}
          </p>

          <div class="grid gap-3 sm:grid-cols-2">
            <div
              v-for="highlight in highlights.slice(1)"
              :key="highlight"
              class="rounded-2xl border border-border-default bg-surface/70 px-4 py-3 font-sora text-sm text-default"
            >
              {{ highlight }}
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
