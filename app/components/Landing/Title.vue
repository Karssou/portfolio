<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const CTARedirect = "/";
const CTARedirectProject = "/";

const { t } = useI18n();

const wordsLine1 = computed(() => t("mainTitle.titleLine1").split(" "));
const wordsLine2 = computed(() => t("mainTitle.titleLine2").split(" "));
</script>

<template>
  <section class="flex flex-col gap-4 sm:gap-6 w-full">
    <h1
      class="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase overflow-hidden leading-tight tracking-tight"
    >
      <span class="sr-only">{{ t("mainTitle.landing") }}</span>

      <span aria-hidden="true" class="flex flex-col">
        <span class="flex flex-wrap gap-x-2 sm:gap-x-4 overflow-hidden">
          <span
            v-for="(word, index) in wordsLine1"
            :key="index"
            class="inline-block animate-slide-up"
            :style="{ animationDelay: `${index * 80}ms` }"
          >
            {{ word }}
          </span>
        </span>

        <span class="flex flex-wrap gap-x-2 sm:gap-x-4 overflow-hidden">
          <span
            v-for="(word, index) in wordsLine2"
            :key="index"
            class="inline-block text-primary animate-slide-up"
            :style="{ animationDelay: `${300 + index * 80}ms` }"
          >
            {{ word }}
          </span>
        </span>
      </span>
    </h1>

    <p
      class="font-sora text-sm sm:text-base text-neutral-400 w-full lg:w-4/5 mb-4 sm:mb-6 animate-fade-up"
      style="animation-delay: 450ms;"
    >
      {{ t("mainTitle.sub") }}
    </p>

    <div
      class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 animate-fade-up"
      style="animation-delay: 650ms;"
    >
      <div class="w-full sm:w-auto">
        <NuxtLink
          class="group inline-flex items-center justify-center gap-2 text-sm font-sora font-semibold w-full sm:w-fit px-5 py-3.5 border border-primary bg-transparent rounded-full shadow-primary/20 shadow-[0px_0px_15px_0px] hover:shadow-primary/40 transition-shadow duration-300 hover:cursor-pointer"
          :to="CTARedirect"
        >
          {{ t("mainTitle.discoverCTA") }}
          <Icon
            icon="material-symbols:arrow-forward-rounded"
            class="size-5 group-hover:translate-x-1 transition-transform duration-200"
          />
        </NuxtLink>
      </div>

      <div class="w-full sm:w-auto">
        <NuxtLink
          class="group inline-flex items-center justify-center gap-2 text-sm font-sora font-semibold w-full sm:w-fit px-5 py-3.5 bg-primary hover:bg-primary/90 text-black rounded-full shadow-primary/20 shadow-[0px_0px_15px_0px] hover:shadow-primary/40 transition-all duration-300 hover:cursor-pointer"
          :to="CTARedirectProject"
        >
          {{ t("mainTitle.contactCTA") }}
          <Icon
            icon="material-symbols:arrow-outward-rounded"
            class="size-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.animate-fade-up {
  animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@media (prefers-reduced-motion: reduce) {
  .animate-slide-up,
  .animate-fade-up {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
