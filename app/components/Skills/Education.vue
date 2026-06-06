<script lang="ts" setup>
import { computed, ref } from "vue";
import { Icon } from "@iconify/vue";

const scrollContainer = ref<HTMLElement | null>(null);

const { t, tm } = useI18n();

const educationItems = computed(
  () =>
    tm("education.items") as Array<{
      school: string;
      period: string;
      degree: string;
      date: string;
    }>,
);

const scrollDown = () => {
  scrollContainer.value?.scrollBy({
    top: scrollContainer.value.clientHeight * 0.7,
    behavior: "smooth",
  });
};
</script>

<template>
  <section
    class="relative flex flex-col gap-6 rounded-4xl border border-border-default bg-surface/70 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl"
  >
    <div class="flex items-center justify-between gap-4">
      <h2
        class="font-['Share Tech'] text-4xl font-bold uppercase tracking-tight"
      >
        {{ t("education.title") }}
      </h2>
      <button
        class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-surface/70 transition-colors duration-300 hover:bg-bg-hovered"
        @click="scrollDown"
      >
        <Icon
          icon="material-symbols:keyboard-arrow-down-rounded"
          class="size-5 text-default"
        />
      </button>
    </div>
    <div
      ref="scrollContainer"
      class="flex flex-col gap-6 overflow-y-auto scroll-smooth pr-1 no-scrollbar"
    >
      <article
        v-for="item in educationItems"
        :key="`${item.school}-${item.date}`"
        class="flex gap-4 rounded-2xl border border-border-default bg-bg-hovered/50 p-4"
      >
        <div class="flex pt-2">
          <div class="size-2 rounded-full bg-primary"></div>
        </div>
        <div class="flex flex-col gap-1">
          <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span class="font-semibold text-lg">{{ item.school }}</span>
            <span class="font-medium text-muted">{{ item.period }}</span>
          </div>
          <span v-if="item.degree" class="font-light text-primary">{{
            item.degree
          }}</span>
          <span class="font-light text-muted">{{ item.date }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
