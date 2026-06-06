<script setup lang="ts">
import { computed } from "vue";

type LanguageEntry = {
  name: string;
  level: string;
  description: string;
  value: number;
};

const { t, tm } = useI18n();

const languageItems = computed(() => tm("language.items") as LanguageEntry[]);
</script>

<template>
  <section
    class="relative overflow-hidden rounded-4xl border border-border-default bg-surface/70 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl"
  >
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"
    />

    <div class="flex flex-col gap-6">
      <div
        class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
      >
        <div class="flex flex-col gap-2">
          <span
            class="inline-flex w-fit items-center gap-2 rounded-full border border-border-default bg-surface/70 px-4 py-1 text-sm font-semibold text-primary"
          >
            <span class="size-2 rounded-full bg-primary" />
            {{ t("language.kicker") }}
          </span>
          <h2
            class="font-['Share Tech'] text-4xl font-bold uppercase tracking-tight sm:text-5xl"
          >
            {{ t("language.title") }}
          </h2>
        </div>

        <p
          class="max-w-xl font-sora text-base leading-7 text-muted sm:text-right"
        >
          {{ t("language.description") }}
        </p>
      </div>

      <div class="grid gap-4 lg:grid-cols-3">
        <article
          v-for="language in languageItems"
          :key="language.name"
          class="group rounded-3xl border border-border-default bg-bg-hovered/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-bg-hovered/70"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex flex-col gap-1">
              <h3 class="font-sora text-lg font-semibold text-default">
                {{ language.name }}
              </h3>
              <p class="text-sm text-muted">
                {{ language.description }}
              </p>
            </div>

            <span
              class="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              {{ language.level }}
            </span>
          </div>

          <div class="mt-5 space-y-2">
            <div
              class="flex items-center justify-between text-xs font-medium text-muted"
            >
              <span>{{ t("language.progress") }}</span>
              <span>{{ language.value }}%</span>
            </div>
            <div class="h-2 overflow-hidden rounded-full bg-border-default/80">
              <div
                class="h-full rounded-full bg-primary to-accent transition-all duration-500 group-hover:brightness-110"
                :style="{ width: `${language.value}%` }"
              />
            </div>
          </div>

          <p class="mt-4 text-sm leading-6 text-muted">
            {{ language.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
