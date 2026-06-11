<script lang="ts" setup>
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";
import { useClipboard } from "@vueuse/core";
const { t, tm } = useI18n();

const email = ref("alexandrelarue67@gmail.com");
const phoneNumber = ref("06 45 06 17 35");
const github = "https://github.com/Karssou";
const linkedin = "https://www.linkedin.com/in/alexandre-larue44";
const maltProfile = "https://www.malt.fr/profile/alexandrelarue";
const fiverrProfile = "https://fr.fiverr.com/s/pd7zjqN";

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
          <div class="flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              :to="maltProfile"
              target="_blank"
              rel="noreferrer noopener"
              class="inline-flex min-w-42 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-default transition-transform duration-300 hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Malt"
                role="img"
                viewBox="0 0 512 512"
                width="800px"
                height="800px"
                class="size-4 fill-default"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="m408.4 103.8c-32.5-32.4-67.1-11.4-88.8 10.2L114.8 318.8c-21.7 21.7-44.4 54.7-10.2 88.8c34.1 34.1 67 11.4 88.7-10.3l204.8-204.8c21.7-21.6 42.7-56.3 10.3-88.7zm-195.7-8.4 43.4 43.4 44.1-44.2c3-3 6-5.8 9.1-8.4c-4.6-23.3-17.9-44.4-53.3-44.4c-35.4 0-48.7 21.2-53.2 44.5c3.3 2.9 6.6 5.8 9.9 9.1zm87.5 322.1-44.1-44.1-43.4 43.3c-3.3 3.3-6.5 6.4-9.8 9.2c5 23.8 19 45.5 53.1 45.5c34.2 0 48.3-21.9 53.2-45.7c-3-2.6-6-5.2-9-8.2zm-105.9-217h-83.6c-30.7 0-70 9.7-70 55.5c0 34.3 21.9 48.3 45.8 53.2c2.8-3.2 107.8-108.7 107.8-108.7zm231.5 2.3c-2.6 3-107.9 108.8-107.9 108.8h82.4c30.7 0 70-7.3 70-55.6c0-35.3-21.1-48.6-44.5-53.2zm-204.1-29.7 14.9-14.9-43.3-43.4c-21.7-21.7-54.6-44.4-88.8-10.2c-25 25-19.4 49.4-6.2 69.1c4.1-.3 123.4-.6 123.4-.6zm68.7 165.9-15 15 44.2 44.1c21.7 21.7 56.3 42.7 88.7 10.3c24.2-24.2 18.7-49.7 5.3-70c-4.3.3-123.2.6-123.2.6z"
                  />
                </g>
              </svg>
              Malt
              <Icon
                icon="material-symbols:arrow-outward-rounded"
                class="size-4"
              />
            </NuxtLink>
            <NuxtLink
              :to="fiverrProfile"
              target="_blank"
              rel="noreferrer noopener"
              class="inline-flex min-w-42 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-default transition-transform duration-300 hover:-translate-y-0.5"
            >
              <svg
                fill="#000000"
                width="800px"
                height="800px"
                viewBox="-2.5 -2 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
                class="jam jam-fiverr size-4 fill-default"
              >
                <path
                  d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z"
                />
                <circle cx="14.375" cy="1.875" r="1.875" />
              </svg>
              Fiverr
              <Icon
                icon="material-symbols:arrow-outward-rounded"
                class="size-4"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
