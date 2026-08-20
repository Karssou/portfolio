<script lang="ts" setup>
import { Icon } from "@iconify/vue";

import SectionHeading from "./SectionHeading.vue";

const { t, locale } = useI18n();

const { data } = await useAsyncData(`projects-${locale.value}`, () =>
  queryCollection("projects").where("path", "LIKE", `%/${locale.value}`).all(),
);
const currentIndex = ref(1);

const nextCard = () => {
  if (currentIndex.value < data.value!.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prevCard = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = data.value!.length - 1;
  }
};

// Swipe Mobile
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0]!.screenX;
};

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0]!.screenX;
  if (touchStartX - touchEndX > 50) nextCard();
  if (touchEndX - touchStartX > 50) prevCard();
};

// Ajoute les styles en fonction de la positition de la card
const getCardStyle = (index: number) => {
  const diff = index - currentIndex.value;

  if (diff === 0) {
    return {
      opacity: 1,
      transform: "translateX(0%) scale(1)",
      zIndex: 30,
      pointerEvents: "auto" as const,
    };
  }

  if (
    diff === -1 ||
    (currentIndex.value === 0 && index === data.value!.length - 1)
  ) {
    return {
      opacity: 0.6,
      transform: "translateX(-65%) scale(0.8)",
      zIndex: 20,
      pointerEvents: "auto" as const,
    };
  }

  if (
    diff === 1 ||
    (currentIndex.value === data.value!.length - 1 && index === 0)
  ) {
    return {
      opacity: 0.6,
      transform: "translateX(65%) scale(0.8)",
      zIndex: 20,
      pointerEvents: "auto" as const,
    };
  }

  return {
    opacity: 0,
    transform:
      diff < 0 ? "translateX(-120%) scale(0.6)" : "translateX(120%) scale(0.6)",
    zIndex: 10,
    pointerEvents: "none" as const,
  };
};
</script>

<template>
  <SectionHeading
    :title="t('projects.title')"
    :description="t('projects.lead')"
    class="max-w-7xl w-full mx-auto mb-12 px-4"
  />
  <div
    class="w-full mx-auto px-4 py-12 flex flex-col items-center overflow-hidden sm:mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] sm:dark:mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
  >
    <div
      class="relative w-full max-w-md sm:max-w-xl h-100 sm:h-125 flex items-center justify-center perspective-[1000px]"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <div
        v-for="(project, index) in data"
        :key="project.id"
        :style="getCardStyle(index)"
        class="absolute w-full h-full transition-all duration-500 ease-out cursor-pointer select-none"
        @click="currentIndex = index"
      >
        <div
          class="w-full h-full rounded-2xl backdrop-blur-xl overflow-hidden bg-surface/90 border border-border-default shadow-2xl flex flex-col justify-between p-3 sm:p-5"
        >
          <div
            class="relative w-full h-48 sm:h-70 rounded-xl overflow-hidden mb-4"
          >
            <NuxtImg
              :src="`/projects/${project.cover}`"
              :alt="project.title"
              class="w-full h-full object-cover"
            />
            <span
              class="absolute top-3 left-3 bg-surface/80 backdrop-blur-md text-default border border-primary/30 text-xs px-3 py-1 rounded-full font-medium"
            >
              {{ project.status }}
            </span>
          </div>

          <!-- PARAGRPAHe -->
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-xl sm:text-2xl font-bold text-default mb-2">
                {{ project.title }}
              </h3>
              <p class="text-xs sm:text-sm text-muted line-clamp-2">
                {{ project.description }}
              </p>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mt-4">
              <span
                v-for="tag in project.stack"
                :key="tag"
                class="text-[11px] px-2.5 py-0.5 rounded-full bg-surface/80 text-default border border-border-default"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-6 mt-8 z-40">
      <button
        aria-label="Projet précédent"
        class="p-3 rounded-full text-default transition-colors hover:text-default/50 hover:cursor-pointer"
        @click="prevCard"
      >
        <Icon icon="material-symbols:arrow-back-ios-rounded" class="size-6" />
      </button>

      <div class="flex gap-2">
        <button
          v-for="(_, index) in data"
          :key="index"
          class="h-2 rounded-full transition-all duration-300"
          :class="
            currentIndex === index ? 'w-8 bg-primary' : 'w-2 bg-bg-hovered'
          "
          :aria-label="`Aller au projet ${index}`"
          @click="currentIndex = index"
        />
      </div>

      <button
        aria-label="Projet suivant"
        class="p-3 rounded-full text-default transition-colors hover:text-default/50 hover:cursor-pointer"
        @click="nextCard"
      >
        <Icon
          icon="material-symbols:arrow-forward-ios-rounded"
          class="size-6"
        />
      </button>
    </div>
  </div>
</template>
