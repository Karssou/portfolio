<script lang="ts" setup>
const { t, tm } = useI18n();
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
            width="800"
            height="800"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
            format="webp"
            preload
            fetchpriority="high"
            loading="eager"
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
          class="mt-4 grid grid-cols-2 gap-4 border-t border-border-default/60 pt-6"
        >
          <div>
            <span class="font-title text-2xl font-bold text-default">
              {{ (tm("about.hint") as any[])?.[0]?.title }}
            </span>
            <p class="text-xs text-muted">
              {{ (tm("about.hint") as any[])?.[0]?.sub }}
            </p>
          </div>
          <div>
            <span class="font-title text-2xl font-bold text-default">{{
              (tm("about.hint") as any[])?.[1]?.title
            }}</span>
            <p class="text-xs text-muted">
              {{ (tm("about.hint") as any[])?.[1]?.sub }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
