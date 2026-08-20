<script setup lang="ts">
const {
  title = "Alexandre Larue",
  description = "Développeur Web Freelance & Ingénieur Frontend",
} = defineProps<{
  title?: string;
  description?: string;
}>();
</script>

<template>
  <div
    class="relative flex h-full w-full flex-col overflow-hidden bg-background text-default"
  >
    <div
      class="absolute -right-45 -top-45 h-125 w-125 rounded-full bg-primary/10"
    />

    <div
      class="absolute -bottom-55 -left-45 h-125 w-125 rounded-full bg-primary/10"
    />

    <div class="relative flex h-full w-full flex-col justify-between p-17">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="flex flex-col">
            <span class="font-sora text-[18px] font-semibold text-default">
              Alexandre Larue
            </span>

            <span
              class="font-sora text-[13px] uppercase tracking-[3px] text-muted"
            >
              alexandre-larue.fr
            </span>
          </div>
        </div>

        <div
          class="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 font-sora text-[13px] font-semibold tracking-[2px] text-primary"
        >
          PORTFOLIO
        </div>
      </div>

      <div class="flex max-w-250 flex-col">
        <div
          class="mb-6 flex items-center gap-3 font-sora text-[15px] font-medium uppercase tracking-[4px] text-primary"
        >
          <div class="h-0.5 w-11 bg-primary" />

          Développement web
        </div>

        <h1
          class="m-0 max-w-250 font-title text-[76px] font-bold leading-[0.98] tracking-[-3px] text-default"
        >
          {{ title }}
        </h1>

        <p
          v-if="description"
          class="mt-7 max-w-250 font-sora text-[27px] leading-[1.35] text-muted"
        >
          {{ description }}
        </p>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="h-2 w-2 rounded-full bg-primary" />

          <span
            class="font-sora text-[13px] uppercase tracking-[3px] text-muted"
          >
            Freelance · Frontend · Vue · Nuxt
          </span>
        </div>

        <span class="font-sora text-[14px] text-muted">
          © {{ new Date().getFullYear() }}
        </span>
      </div>
    </div>
  </div>
</template>
