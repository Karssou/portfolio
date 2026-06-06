<script lang="ts" setup>
defineProps<{
  kicker: string;
  title: string;
  description?: string;
}>();
</script>

<template>
  <div class="flex max-w-3xl flex-col gap-3">
    <span class="inline-flex w-fit items-center gap-2 rounded-full border border-border-default bg-surface/70 px-4 py-1 text-sm font-semibold text-primary backdrop-blur">
      <span class="size-2 rounded-full bg-primary" />
      {{ kicker }}
    </span>
    <h2 class="font-['Share Tech'] text-4xl font-bold uppercase tracking-tight sm:text-5xl">
      {{ title }}
    </h2>
    <p v-if="description" class="max-w-2xl font-sora text-base leading-7 text-muted sm:text-lg">
      {{ description }}
    </p>
  </div>
</template>
