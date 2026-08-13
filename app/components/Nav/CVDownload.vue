<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const { t } = useI18n();
</script>

<template>
  <div class="relative group">
    <div
      class="absolute -inset-1 rounded-full bg-primary/40 blur-md animate-pulse opacity-70"
    />
      <a
        href="#contact"
        class="relative overflow-hidden flex items-center gap-1 px-3 py-2 rounded-full bg-primary/80 backdrop-blur-xl border border-white/10 text-white font-semibold transition-all duration-300 ease-out hover:bg-primary hover:scale-[1.04] hover:shadow-[0_10px_30px_rgba(255,140,0,0.35)]"
      >
        <span class="relative z-10">{{ t("navbar.audit") }}</span>

        <Icon
          icon="material-symbols:contract-edit-outline-rounded"
          class="relative z-10 size-5"
        />

        <div
          class="absolute inset-0 bg-linear-to-r from-white/10 via-white/0 to-white/10 opacity-0 rounded-full translate-x-full group-hover:opacity-100 transition-all duration-700 ease-out"
        />
      </a>
  </div>
</template>

<style>
@keyframes cta-pulse {
  0%,
  100% {
    transform: scale(0.95);
    opacity: 0.3;
  }

  50% {
    transform: scale(1.15);
    opacity: 0.7;
  }
}

.animate-cta-pulse {
  animation: cta-pulse 0.5s ease-in-out infinite;
}
</style>
