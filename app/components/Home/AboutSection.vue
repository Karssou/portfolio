<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const { t } = useI18n();
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 py-16">
    <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div class="relative mx-auto w-full max-w-md">
        <div
          class="aspect-square overflow-hidden rounded-2xl border border-border-default bg-surface/60 p-2 backdrop-blur-xl"
        >
          <NuxtImg
            src="/images/alexandre-larue-developpeur-full-stack-person.avif"
            alt="Alexandre Larue - Développeur Web Freelance"
            width="448"
            height="448"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 448px"
            format="avif"
            loading="lazy"
            decoding="async"
            class="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div
          class="absolute flex gap-2 -bottom-4 -right-4 rounded-xl border border-border-default bg-surface/90 px-4 py-2 font-sora text-xs font-semibold shadow-xl backdrop-blur-md"
        >
          <div class="w-4 h-4 rounded-full bg-green-500"></div>
          {{ t("about.cta") }}
        </div>
      </div>

      <div class="flex flex-col gap-4 font-sora">
        <span
          class="text-xs font-semibold uppercase tracking-wider text-primary"
        >
          {{ t("about.lead") }}
        </span>
        <h2 class="font-title text-3xl font-bold sm:text-4xl">
          {{ t("about.title") }}
        </h2>
        <p class="text-sm leading-relaxed text-muted">
          {{ t("about.paragraph1") }}
        </p>
        <p class="text-sm leading-relaxed text-muted">
          {{ t("about.paragraph2") }}
        </p>

        <div
          class="mt-4 flex items-center gap-4 border-t border-border-default/60 pt-6"
        >
          <a
            target="_blank"
            class="px-4 py-2 flex items-center flex-row rounded-xl bg-transparent border-2 border-primary hover:bg-primary transition-colors duration-300"
            href="/documents/CV Alexandre LARUE.pdf"
          >
            <Icon icon="material-symbols:download" class="size-5" />
            {{ t("about.cv") }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
