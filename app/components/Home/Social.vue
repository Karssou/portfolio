<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import SectionHeading from "../Home/SectionHeading.vue";

const { t } = useI18n();

const socialLinks = [
  {
    name: "LinkedIn",
    category: "Réseau pro",
    url: "https://linkedin.com/in/alexandre-larue44",
    icon: "line-md:linkedin",
    color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/40",
  },
  {
    name: "GitHub",
    category: "Code & Projets",
    url: "https://github.com/Karssou",
    icon: "line-md:github-loop",
    color: "hover:text-white hover:border-white/40",
  },
  {
    name: "Malt",
    category: "Freelance",
    url: "https://malt.fr/profile/alexandrelarue",
    icon: "simple-icons:malt",
    color: "hover:text-[#FF4A5A] hover:border-[#FF4A5A]/40",
  },
  {
    name: "Instagram",
    category: "Actu & Veille",
    url: "https://instagram.com/alexandre.larue.dev",
    icon: "line-md:instagram",
    color: "hover:text-[#E4405F] hover:border-[#E4405F]/40",
  },
  {
    name: "Email",
    category: "Contact direct",
    value: "contact@alexandre-larue.fr",
    url: "mailto:contact@alexandre-larue.fr",
    icon: "line-md:email-multiple",
    color: "hover:text-primary hover:border-primary/40",
  },
  {
    name: "Téléphone",
    category: "Appel / SMS",
    value: "+33 6 45 06 17 35",
    url: "tel:+33645061735",
    icon: "line-md:phone-call",
    color: "hover:text-primary hover:border-primary/40",
  },
];
</script>

<template>
  <section
    class="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-16"
  >
    <SectionHeading
      :title="t('social.title')"
      :description="t('social.description')"
      class="mx-auto mb-12 w-full max-w-7xl px-4"
    />

    <div class="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <a
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        :class="[
          'group relative flex items-center gap-4 rounded-2xl border border-border-default bg-surface/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-bg-hovered/80 hover:shadow-lg',
          link.color,
        ]"
      >
        <div
          class="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border-default bg-bg-hovered/80 text-muted transition-colors duration-300 group-hover:border-current group-hover:bg-primary/10 group-hover:text-current"
        >
          <Icon :icon="link.icon" class="size-6" />
        </div>

        <div class="flex flex-col min-w-0">
          <span
            class="font-sora text-xs font-medium uppercase tracking-wider text-muted"
          >
            {{ link.category }}
          </span>
          <span class="font-title text-lg font-bold text-default truncate">
            {{ link.value || link.name }}
          </span>
        </div>

        <Icon
          icon="material-symbols:arrow-outward-rounded"
          class="ml-auto size-5 shrink-0 text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-current"
        />
      </a>
    </div>
  </section>
</template>
