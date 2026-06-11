<script lang="ts" setup>
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";

const open = ref(false);

const { locales, setLocale, locale } = useI18n();

// Langue actuelle basée sur locale
const current = computed(() => {
  return locales.value.find((l) => l.code === locale.value);
});
</script>

<template>
  <div class="relative z-50">
    <button
      class="flex items-center gap-2 rounded-full border border-border-default bg-surface/85 px-4 py-2 text-default backdrop-blur-xl transition-all duration-300 hover:bg-white/5"
      @click="open = !open"
    >
      <span class="font-semibold">{{ current?.code.toUpperCase() }}</span>
      <span class="text-sm opacity-70">{{ current?.name }}</span>
      <Icon
        class="transition-transform duration-300"
        :class="{ 'rotate-180': open }"
        icon="material-symbols:keyboard-arrow-down-rounded"
      />
    </button>

    <Transition name="dropdown">
      <div
        v-if="open"
        class="absolute left-0 top-full z-50 mt-2 flex min-w-44 flex-col gap-1 rounded-2xl border border-border-default bg-surface/95 p-1 text-default shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
      >
        <div
          v-for="lang in locales"
          :key="lang.code"
          class="flex cursor-pointer items-center justify-between rounded-full px-3 py-2 transition-all duration-300 hover:bg-bg-hovered"
          @click="
            setLocale(lang.code);
            open = false;
          "
        >
          <span class="flex items-center gap-2">
            {{ lang.name }}
          </span>

          <Icon
            icon="material-symbols:check-rounded"
            class="size-5 transition-all duration-300"
            :class="
              lang.code === locale
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-50'
            "
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.1s ease-out;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
  filter: blur(6px);
}

.dropdown-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
  filter: blur(6px);
}
</style>
