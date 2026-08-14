<script setup lang="ts">
import type { NuxtError } from "#app";
import { Icon } from "@iconify/vue";

const props = defineProps<{ error: NuxtError }>();
</script>

<template>
  <main class="w-screen h-screen relative flex items-center justify-center">
    <div class="flex flex-col gap-2 items-center">
      <h1 class="font-bold font-title text-primary text-9xl">
        {{ error.status }}
      </h1>

      <h2 class="text-default text-4xl">{{ error.statusText }}</h2>

      <NuxtLink
        to="/"
        class="inline-flex items-center justify-center gap-1 mt-5 rounded-full border border-border-default px-3 py-2 bg-white/10 backdrop-blur-xl text-default transition-all duration-300 hover:bg-white/20"
      >
        <Icon
          icon="material-symbols:keyboard-arrow-left-rounded"
          class="grow size-4"
        />
        <span class="leading-0 text-sm font-medium">Home</span>
      </NuxtLink>
    </div>
  </main>
</template>
