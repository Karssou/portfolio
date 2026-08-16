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
const wordsLine1 = ["TRANSFORMER", "VOS", "IDÉES", "EN"];
const wordsLine2 = ["EXPÉRIENCES", "SUR-MESURE"];
</script>

<template>
  <section class="flex flex-col gap-2">
    <h1 class="text-6xl font-bold uppercase overflow-hidden leading-tight">
      <span class="sr-only" aria-hidden="true"
        >TRANSFORMER VOS IDÉES EN EXPÉRIENCES SUR-MESURE</span
      >
      <div class="flex flex-wrap gap-x-4 overflow-hidden">
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
      <div class="flex flex-wrap gap-x-4 overflow-hidden">
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
    </h1>
    <motion.p
      :initial="fadeUp.initial"
      :animate="fadeUp.animate"
      :transition="{ duration: 0.6, ease: 'easeOut', delay: 0.7 }"
      class="font-sora w-2/3 mb-10"
    >
      Ingénierie web moderne. Je crée des interfaces fluides et des
      architectures robustes, pensées pour la performance et le sur-mesure.
    </motion.p>

    <motion.div
      :initial="fadeUp.initial"
      :animate="fadeUp.animate"
      :transition="{ duration: 0.4, ease: 'easeOut', delay: 1 }"
      class="flex gap-2"
    >
      <div>
        <NuxtLink
          class="group inline-flex items-center gap-2 leading-none font-semibold w-fit px-4 py-3 border border-primary bg-transparent rounded-full shadow-primary/20 shadow-[0px_0px_15px_0px] hover:shadow-primary/40 transition-shadow duration-300 hover:cursor-pointer"
          :to="CTARedirect"
        >
          Découvrir mon univers
          <Icon
            icon="material-symbols:arrow-forward-rounded"
            class="grow size-6 group-hover:translate-x-1 transition-transform duration-200"
          />
        </NuxtLink>
      </div>

      <div>
        <NuxtLink
          class="group inline-flex items-center gap-2 leading-none font-semibold w-fit px-4 py-3 bg-primary/80 hover:bg-primary text-black rounded-full shadow-primary/20 shadow-[0px_0px_15px_0px] hover:shadow-primary/40 transition-all duration-300 hover:cursor-pointer"
          :to="CTARedirectProject"
        >
          Démarrer un projet
          <Icon
            icon="material-symbols:arrow-outward-rounded"
            class="grow size-6 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </NuxtLink>
      </div>
    </motion.div>
  </section>
</template>
