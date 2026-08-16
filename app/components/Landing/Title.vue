<script lang="ts" setup>
import { Icon } from "@iconify/vue";
const CTARedirect = "/";
const CTARedirectProject = "/";
</script>

<template>
  <section class="flex flex-col gap-2">
    <h1 class="text-6xl uppercase font-title text-default font-bold">
      TRANSFORMER VOS IDÉES EN
      <strong class="text-primary">EXPÉRIENCES SUR-MESURE</strong>
    </h1>
    <p class="font-sora w-2/3 mb-10">
      Ingénierie web moderne. Je crée des interfaces fluides et des
      architectures robustes, pensées pour la performance et le sur-mesure.
    </p>
    <div class="flex gap-2">
      <NuxtLink
        class="group inline-flex items-center gap-2 leading-none font-semibold w-fit px-4 py-3 border border-primary bg-transparent rounded-full shadow-primary/30 shadow-[0px_0px_20px_0px] hover:cursor-pointer"
        :to="CTARedirect"
      >
        Découvrir mon univers
        <Icon
          icon="material-symbols:arrow-forward-rounded"
          class="grow size-6 group-hover:translate-x-0.5 transition-transform duration-200"
        />
      </NuxtLink>
      <NuxtLink
        class="group inline-flex items-center gap-2 leading-none font-semibold w-fit px-4 py-3 bg-primary/70 rounded-full shadow-primary/30 shadow-[0px_0px_20px_0px] hover:cursor-pointer"
        :to="CTARedirectProject"
      >
        Démarrer un projet
        <Icon
          icon="material-symbols:arrow-outward-rounded"
          class="grow size-6 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
        />
      </NuxtLink>
    </div>
  </section>
</template>
