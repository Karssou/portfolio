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
    valueMobile: "alexandre-larue44",
  },
  {
    name: "GitHub",
    category: "Code & Projets",
    url: "https://github.com/Karssou",
    icon: "line-md:github-loop",
    color: "hover:text-white hover:border-white/40",
    valueMobile: "Karssou",
  },
  {
    name: "Malt",
    category: "Freelance",
    url: "https://malt.fr/profile/alexandrelarue",
    icon: "simple-icons:malt",
    color: "hover:text-[#FF4A5A] hover:border-[#FF4A5A]/40",
    valueMobile: "alexandrelarue",
  },
  {
    name: "Instagram",
    category: "Actu & Veille",
    url: "https://instagram.com/alexandre.larue.dev",
    icon: "line-md:instagram",
    color: "hover:text-[#E4405F] hover:border-[#E4405F]/40",
    valueMobile: "@alexandre.larue.dev",
  },
  {
    name: "Email",
    category: "Contact direct",
    value: "contact@alexandre-larue.fr",
    valueMobile: "contact@alexandre-larue.fr",
    url: "mailto:contact@alexandre-larue.fr",
    icon: "line-md:email-multiple",
    color: "hover:text-primary hover:border-primary/40",
  },
  {
    name: "Téléphone",
    category: "Appel / SMS",
    value: "+33 6 45 06 17 35",
    valueMobile: "06 45 06 17 35",
    url: "tel:+33645061735",
    icon: "line-md:phone-call",
    color: "hover:text-primary hover:border-primary/40",
  },
];
</script>

<template>
  <section
    class="mx-auto flex w-full max-w-7xl flex-col items-center overflow-hidden px-3 py-8 sm:px-4 sm:py-12 lg:py-16"
  >
    <SectionHeading
      :title="t('social.title')"
      :description="t('social.description')"
      class="max-w-7xl w-full mx-auto mb-12 px-4"
    />

    <div
      class="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
    >
      <a
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        :class="[
          'group relative flex w-full min-w-0 items-center gap-2.5 overflow-hidden rounded-xl border border-border-default bg-surface/60 p-3 backdrop-blur-xl transition-all duration-300',
          'hover:-translate-y-1 hover:bg-bg-hovered/80 hover:shadow-lg',
          'active:scale-[0.99]',
          'sm:gap-3 sm:rounded-2xl sm:p-4 lg:p-5',
          link.color,
        ]"
      >
        <!-- Icône -->
        <div
          class="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border-default bg-bg-hovered/80 text-muted transition-colors duration-300 group-hover:border-current group-hover:bg-primary/10 group-hover:text-current sm:size-11 sm:rounded-xl lg:size-12"
        >
          <Icon :icon="link.icon" class="size-4.5 sm:size-5 lg:size-6" />
        </div>

        <!-- Contenu -->
        <div class="min-w-0 flex-1">
          <span
            class="block truncate font-sora text-[9px] font-medium uppercase tracking-[0.12em] text-muted sm:text-[10px] lg:text-xs"
          >
            {{ link.category }}
          </span>

          <span
            class="block overflow-hidden text-ellipsis whitespace-nowrap font-title text-[13px] font-bold leading-tight text-default sm:text-sm lg:text-base"
            :title="link.value || link.name"
          >
            {{ link.valueMobile || link.value || link.name }}
          </span>
        </div>

        <!-- Flèche -->
        <Icon
          icon="material-symbols:arrow-outward-rounded"
          class="size-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-current sm:size-5"
        />
      </a>
    </div>
  </section>
</template>
