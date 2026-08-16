<script lang="ts" setup>
const words = [
  "Design System",
  "Web App",
  "E-Commerce",
  "Cloud",
  "Saas",
  "Nuxt 4",
  "Vue.js",
  "TypeScript",
  "AdonisJS",
  "Tailwind CSS",
  "Docker",
  "PostgreSQL",
  "REST API",
  "DevOps",
];
</script>

<template>
  <div
    class="overflow-hidden bg-primary/40 py-4 font-title font-light backdrop-blur-2xl -rotate-1 relative z-0 origin-left"
  >
    <div
      class="relative flex w-full overflow-hidden py-4 mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] dark:mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div
        class="flex min-w-full shrink-0 items-center justify-around gap-12 animate-marquee"
      >
        <template v-for="(word, index) in words" :key="`orig-${index}`">
          <span
            class="text-xl font-bold uppercase tracking-wider text-default whitespace-nowrap"
          >
            {{ word }}
          </span>
          <span class="text-xl font-bold text-default select-none">/</span>
        </template>
      </div>

      <!-- Copie dupliquée -->
      <div
        aria-hidden="true"
        class="flex min-w-full shrink-0 items-center justify-around gap-12 animate-marquee"
      >
        <template v-for="(word, index) in words" :key="`dup-${index}`">
          <span
            class="text-xl font-bold uppercase tracking-wider text-default whitespace-nowrap"
          >
            {{ word }}
          </span>
          <span class="text-xl font-bold text-default select-none">/</span>
        </template>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 40s linear infinite;
}

/* Optionnel : Mettre en pause le carrousel au survol de la souris */
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
