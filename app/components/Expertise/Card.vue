<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const { title, description, tags, count, checks, icon } = defineProps<{
  title: string;
  description: string;
  tags: string[];
  count: number;
  checks: string[];
  icon: string;
}>();
</script>

<template>
  <div
    class="group relative flex max-w-lg h-md flex-col justify-between overflow-hidden rounded-2xl border border-border-default bg-surface/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
  >
    <div
      class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/15 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-primary/25"
      aria-hidden="true"
    />

    <span
      class="absolute right-6 top-4 font-title text-5xl font-extrabold text-default/10 transition-colors duration-300 group-hover:text-primary/20"
    >
      0{{ count }}
    </span>
    <div class="relative z-10 mb-8">
      <div
        class="flex size-12 items-center justify-center rounded-xl border border-border-default bg-bg-hovered/80 text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary/10"
      >
        <Icon :icon="icon" class="size-6 shrink-0" />
      </div>
    </div>

    <div class="relative z-10 flex flex-col gap-4">
      <h2
        class="font-title text-2xl font-bold tracking-tight text-default sm:text-3xl"
      >
        {{ title }}
      </h2>

      <p class="font-sora text-sm leading-relaxed text-muted">
        {{ description }}
      </p>

      <div class="mt-2 flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full border border-border-default bg-surface/80 px-3 py-1 font-sora text-xs font-medium text-default/80 transition-colors duration-200 hover:border-primary/40 hover:text-primary"
        >
          {{ tag }}
        </span>
      </div>
      <div class="mt-4 flex flex-col gap-2">
        <div v-for="check in checks" :key="check" class="flex gap-2">
          <Icon
            icon="material-symbols:check-circle-outline-rounded"
            class="size-4 text-primary/70"
          />
          <span class="text-sm text-primary/70">
            {{ check }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
