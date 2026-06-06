<script lang="ts" setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useClipboard } from "@vueuse/core";

const { t } = useI18n();

const email = ref("alexandrelarue67@gmail.com");
const phoneNumber = ref("06 45 06 17 35");
const github = "https://github.com/Karssou";
const linkedin = "https://www.linkedin.com/in/alexandre-larue44";

const { copy: phoneCopy, copied: phoneCopied } = useClipboard({
  source: phoneNumber,
  copiedDuring: 1500,
  legacy: true,
});

const { copy: emailCopy, copied: emailCopied } = useClipboard({
  source: email,
  copiedDuring: 1500,
  legacy: true,
});
</script>

<template>
  <section
    class="relative overflow-hidden rounded-4xl border border-border-default bg-surface/70 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:p-10 lg:p-12"
  >
    <div
      class="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent"
    />

    <div class="relative flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <span
          data-hero="eyebrow"
          class="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary"
        >
          <span class="size-2 rounded-full bg-primary" />
          {{ t("mainTitle.job") }}
        </span>

        <h1
          data-hero="title"
          class="max-w-4xl font-['Share Tech'] text-5xl font-bold uppercase tracking-tight sm:text-7xl lg:text-8xl"
        >
          Alexandre <br />
          Larue
        </h1>

        <p
          data-hero="tagline"
          class="max-w-2xl font-sora text-base leading-7 text-muted sm:text-lg"
        >
          {{ t("mainTitle.tagline") }}
        </p>

        <div class="flex flex-wrap gap-3 pt-2">
          <NuxtLink
            to="#projects"
            data-hero="cta"
            class="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            {{ t("mainTitle.ctaProjects") }}
            <Icon
              icon="material-symbols:arrow-forward-rounded"
              class="size-5"
            />
          </NuxtLink>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        <button
          data-hero="contact"
          class="group flex items-center gap-3 rounded-2xl border border-border-default bg-surface/60 px-4 py-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:bg-bg-hovered"
          @click="emailCopy()"
        >
          <Icon
            icon="material-symbols:mail-rounded"
            class="size-6 text-primary"
          />
          <span
            class="font-sora max-w-[80%] text-ellipsis text-sm sm:text-base"
          >
            {{ emailCopied ? "Copié !" : email }}
          </span>
        </button>

        <button
          data-hero="contact"
          class="group flex items-center gap-3 rounded-2xl border border-border-default bg-surface/60 px-4 py-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:bg-bg-hovered"
          @click="phoneCopy()"
        >
          <Icon
            icon="material-symbols:call-outline-rounded"
            class="size-6 text-primary"
          />
          <span class="font-sora text-sm sm:text-base">
            {{ phoneCopied ? "Copié !" : phoneNumber }}
          </span>
        </button>

        <NuxtLink
          :to="github"
          target="_blank"
          data-hero="contact"
          class="flex items-center gap-3 rounded-2xl border border-border-default bg-surface/60 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-bg-hovered"
        >
          <Icon icon="mdi:github" class="size-6 text-primary" />
          <span class="font-sora text-sm sm:text-base">github.com/Karssou</span>
        </NuxtLink>

        <NuxtLink
          :to="linkedin"
          target="_blank"
          data-hero="contact"
          class="flex items-center gap-3 rounded-2xl border border-border-default bg-surface/60 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-bg-hovered"
        >
          <Icon icon="mdi:linkedin" class="size-6 text-primary" />
          <span class="font-sora text-sm sm:text-base">alexandre-larue44</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
