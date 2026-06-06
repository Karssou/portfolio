<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="relative group">
    <button
      class="relative overflow-hidden flex items-center gap-1 px-3 py-2 rounded-full bg-primary/80 backdrop-blur-xl border border-white/10 text-white font-semibold transition-all duration-300 ease-out hover:bg-primary hover:scale-[1.04] hover:shadow-[0_10px_30px_rgba(255,140,0,0.35)]"
    >
      <NuxtLink
        to="/documents/CV Alexandre LARUE.pdf"
        target="_blank"
        class="relative z-10"
      >
        Télécharger CV
      </NuxtLink>
      <Icon icon="material-symbols:arrow-outward-rounded" class="size-5" />
      <div
        class="absolute inset-0 bg-linear-to-r from-white/10 via-white/0 to-white/10 opacity-0 rounded-full group-hover:opacity-100 translate-x-full group-hover:translate-x-full transition-all duration-700 ease-out"
      />
    </button>
  </div>
</template>
