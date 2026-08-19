<script lang="ts" setup>
import { motion } from "motion-v";
import { Icon } from "@iconify/vue";

const CTARedirect = "/";
const CTARedirectProject = "/";

// Configuration d'animation réutilisable
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

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

      <div aria-hidden="true" class="flex flex-col">
        <div class="flex flex-wrap gap-x-2 sm:gap-x-4 overflow-hidden">
          <motion.span
            v-for="(word, index) in wordsLine1"
            :key="index"
            :initial="{ y: '100%', opacity: 0 }"
            :animate="{ y: '0%', opacity: 1 }"
            :transition="{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.08,
            }"
            class="inline-block"
          >
            {{ word }}
          </motion.span>
        </div>

        <div class="flex flex-wrap gap-x-2 sm:gap-x-4 overflow-hidden">
          <motion.span
            v-for="(word, index) in wordsLine2"
            :key="index"
            :initial="{ y: '100%', opacity: 0 }"
            :animate="{ y: '0%', opacity: 1 }"
            :transition="{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3 + index * 0.08,
            }"
            class="inline-block text-primary"
          >
            {{ word }}
          </motion.span>
        </div>
      </div>
    </h1>

    <motion.p
      :initial="fadeUp.initial"
      :animate="fadeUp.animate"
      :transition="{ duration: 0.6, ease: 'easeOut', delay: 0.7 }"
      class="font-sora text-sm sm:text-base text-neutral-400 w-full lg:w-4/5 mb-4 sm:mb-6"
    >
      {{ t("mainTitle.sub") }}
    </motion.p>

    <motion.div
      :initial="fadeUp.initial"
      :animate="fadeUp.animate"
      :transition="{ duration: 0.4, ease: 'easeOut', delay: 1 }"
      class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
    >
      <motion.div class="w-full sm:w-auto">
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
      </motion.div>

      <motion.div class="w-full sm:w-auto">
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
      </motion.div>
    </motion.div>
  </section>
</template>
