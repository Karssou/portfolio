<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const { t } = useI18n();

const items = [
  {
    key: "navbar.home",
    href: "#home",
    icon: "material-symbols:home-outline-rounded",
  },
  {
    key: "navbar.about",
    href: "#about",
    icon: "material-symbols:person-outline-rounded",
  },
  {
    key: "navbar.skills",
    href: "#skills",
    icon: "material-symbols:flash-on-outline-rounded",
  },
  {
    key: "navbar.projects",
    href: "#projects",
    icon: "material-symbols:code-rounded",
  },
];
</script>

<template>
  <section
    class="w-full max-h-16 h-full max-w-fit rounded-full bg-surface/30 backdrop-blur-xl border border-border-default px-2 shadow-2xl flex items-center overflow-x-auto"
  >
    <ul
      class="w-full min-w-max flex items-center justify-between gap-x-2 text-default whitespace-nowrap"
    >
      <li
        v-for="item in items"
        :key="item.key"
        class="flex items-center rounded-full px-4 py-2.5 transition-all duration-200 ease-out hover:bg-bg-hovered hover:shadow-md"
      >
        <NuxtLink :to="item.href" class="flex items-center">
          <Icon
            :icon="item.icon"
            class="mr-2 size-6 transition-all duration-300 ease-out"
          />
          <span class="select-none transition-all duration-300 ease-out">
            {{ t(item.key) }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
