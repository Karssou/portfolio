<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <button
      type="button"
      aria-label="Basculer le thème clair/sombre"
      :aria-pressed="isDark"
      class="relative group flex items-center justify-center p-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-border-default text-default transition-all duration-300 hover:bg-white/20"
      @click="isDark = !isDark"
    >
      <div class="relative size-5">
        <Icon
          icon="material-symbols:dark-mode"
          class="absolute inset-0 size-5 transition-all duration-300"
          :class="isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-75'"
        />
        <Icon
          icon="material-symbols:light-mode-rounded"
          class="absolute inset-0 size-5 transition-all duration-300"
          :class="!isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-75'"
        />
      </div>
      <section
        class="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/10 backdrop-blur-xl border border-border-default text-default px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-200"
      >
        <span>Changer couleur</span>
      </section>
    </button>
  </ClientOnly>
</template>
