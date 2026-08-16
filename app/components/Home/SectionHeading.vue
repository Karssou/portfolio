<script lang="ts" setup>
defineProps<{
  kicker?: string;
  title: string;
  description?: string;
}>();
</script>

<template>
  <div class="flex max-w-3xl flex-col gap-3">
    <h2
      class="font-title text-4xl font-bold uppercase tracking-tight sm:text-5xl"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="max-w-2xl font-sora text-base leading-7 text-muted sm:text-lg"
    >
      {{ description }}
    </p>
  </div>
</template>
