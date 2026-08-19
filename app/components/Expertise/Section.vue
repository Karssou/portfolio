<script lang="ts" setup>
import type { Expertise } from "~/types/Expertise.ts";
import SectionHeading from "../Home/SectionHeading.vue";

const { t, tm } = useI18n();


const expertises = computed(() => (tm("expertise.items") as Expertise[]) || []);
</script>

<template>
  <section
    class="flex w-full mx-auto px-4 py-12 flex-col items-center justify-center"
  >
    <SectionHeading
      :title="t('expertise.title')"
      :description="t('expertise.description')"
      class="max-w-7xl w-full mx-auto mb-12 px-4"
    />
    <section class="grid gap-6 md:grid-cols-2">
      <ExpertiseCard
        v-for="exp in expertises"
        :key="exp.count"
        :count="exp.count"
        :title="exp.title"
        :description="exp.description"
        :icon="exp.icon"
        :tags="exp.tags"
        :checks="exp.checks"
      />
    </section>
  </section>
</template>
