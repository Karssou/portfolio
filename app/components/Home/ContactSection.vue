<script lang="ts" setup>
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useClipboard } from "@vueuse/core";

const { t, tm } = useI18n();

const email = ref("alexandrelarue67@gmail.com");
const phoneNumber = ref("06 45 06 17 35");
const github = "https://github.com/Karssou";
const linkedin = "https://www.linkedin.com/in/alexandre-larue44";

const { copy: emailCopy, copied: emailCopied } = useClipboard({
  source: email,
  copiedDuring: 1500,
  legacy: true,
});

const { copy: phoneCopy, copied: phoneCopied } = useClipboard({
  source: phoneNumber,
  copiedDuring: 1500,
  legacy: true,
});

const contactCtaCopy = computed(() => tm("contact.ctaCopy") as string[]);
</script>

<template>
  <section class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
    <HomeSectionHeading
      kicker="Contact"
      :title="t('contact.title')"
      :description="t('contact.lead')"
    />

    <div class="grid gap-4 sm:grid-cols-2">
      <button
        data-card
        class="flex items-center gap-3 rounded-3xl border border-border-default bg-surface/70 px-5 py-4 text-left shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-bg-hovered"
        data-delay="60"
        @click="emailCopy()"
      >
        <Icon
          icon="material-symbols:mail-rounded"
          class="size-6 text-primary"
        />
        <span class="flex flex-col">
          <span class="text-xs uppercase tracking-[0.2em] text-muted">{{
            t("contact.emailLabel")
          }}</span>
          <span class="font-sora text-sm font-semibold">{{
            emailCopied ? "Copié !" : email
          }}</span>
        </span>
      </button>

      <button
        data-card
        class="flex items-center gap-3 rounded-3xl border border-border-default bg-surface/70 px-5 py-4 text-left shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-bg-hovered"
        data-delay="130"
        @click="phoneCopy()"
      >
        <Icon icon="material-symbols:call" class="size-6 text-primary" />
        <span class="flex flex-col">
          <span class="text-xs uppercase tracking-[0.2em] text-muted">{{
            t("contact.phoneLabel")
          }}</span>
          <span class="font-sora text-sm font-semibold">{{
            phoneCopied ? "Copié !" : phoneNumber
          }}</span>
        </span>
      </button>

      <NuxtLink
        :to="github"
        target="_blank"
        data-card
        class="flex items-center gap-3 rounded-3xl border border-border-default bg-surface/70 px-5 py-4 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-bg-hovered"
        data-delay="200"
      >
        <Icon icon="mdi:github" class="size-6 text-primary" />
        <span class="flex flex-col">
          <span class="text-xs uppercase tracking-[0.2em] text-muted">{{
            t("contact.githubLabel")
          }}</span>
          <span class="font-sora text-sm font-semibold"
            >github.com/Karssou</span
          >
        </span>
      </NuxtLink>

      <NuxtLink
        :to="linkedin"
        target="_blank"
        data-card
        class="flex items-center gap-3 rounded-3xl border border-border-default bg-surface/70 px-5 py-4 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-bg-hovered"
        data-delay="270"
      >
        <Icon icon="mdi:linkedin" class="size-6 text-primary" />
        <span class="flex flex-col">
          <span class="text-xs uppercase tracking-[0.2em] text-muted">{{
            t("contact.linkedinLabel")
          }}</span>
          <span class="font-sora text-sm font-semibold">alexandre-larue44</span>
        </span>
      </NuxtLink>

      <div
        data-card
        class="sm:col-span-2 rounded-[1.75rem] border border-border-default bg-linear-to-br from-primary/15 via-surface/70 to-surface/60 p-6 shadow-lg backdrop-blur-xl"
        data-delay="340"
      >
        <div
          class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h3
              class="font-['Share Tech'] text-3xl font-bold uppercase tracking-tight"
            >
              {{ t("contact.ctaTitle") }}
            </h3>
            <p class="mt-2 max-w-xl font-sora text-sm leading-7 text-muted">
              {{ contactCtaCopy[0] }}
            </p>
            <p class="mt-2 max-w-xl font-sora text-sm leading-7 text-muted">
              {{ contactCtaCopy[1] }}
            </p>
          </div>

          <NuxtLink
            to="#home"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            {{ t("contact.backToTop") }}
            <Icon icon="material-symbols:arrow-upward-rounded" class="size-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
