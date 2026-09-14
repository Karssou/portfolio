<script lang="ts" setup>
// Plus de props, tout est directement défini pour ton usage Cal.com
const calUrl = "https://cal.com/alexandre-larue/rendez-vous-decouverte";
const label = "Discuter de votre projet";
</script>

<template>
  <a
    :href="calUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="group relative inline-flex items-center justify-center gap-3 rounded-full border border-border-default bg-surface/60 px-6 py-3.5 text-sm font-semibold text-default backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:bg-surface/80 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
  >
    <span class="relative flex size-2.5 items-center justify-center">
      <span
        class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"
      />
      <span class="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
    </span>

    <span class="font-sora tracking-wide">
      {{ label }}
    </span>

    <div
      class="flex items-center gap-1 text-muted transition-colors group-hover:text-default"
    >
      <Icon
        name="material-symbols:calendar-today-outline-rounded"
        class="size-4.5 transition-transform duration-300 group-hover:-translate-y-0.5"
      />
      <Icon
        name="material-symbols:arrow-outward-rounded"
        class="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </div>
  </a>
</template>
