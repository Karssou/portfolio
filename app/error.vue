<script setup lang="ts">
import type { NuxtError } from "#app";

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
        class="mt-5 rounded-full border border-border-default px-4 py-2 bg-white/10 backdrop-blur-xl text-default transition-all duration-300 hover:bg-white/20"
        to="/"
        >Home</NuxtLink
      >
    </div>
  </main>
</template>
