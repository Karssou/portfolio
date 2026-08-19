<script setup lang="ts">
import { Icon } from "@iconify/vue";

type Skill = {
  name: string;
  icon: string;
  tags: string[];
};

const skills: Skill[] = [
  {
    name: "Nuxt 4",
    icon: "logos:nuxt-icon",
    tags: ["SSR", "API", "Fullstack"],
  },
  {
    name: "FastAPI",
    icon: "logos:fastapi-icon",
    tags: ["REST", "Python", "Backend"],
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
    tags: ["DevOps", "Container"],
  },
  {
    name: "Vue.js",
    icon: "logos:vue",
    tags: ["Components", "Reactive"],
  },
  {
    name: "AdonisJS",
    icon: "logos:adonisjs-icon",
    tags: ["Auth", "REST", "Modules"],
  },
  {
    name: "TailwindCSS",
    icon: "logos:tailwindcss-icon",
    tags: ["UI", "Design", "Web"],
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    tags: ["Types", "DX"],
  },
  {
    name: "Linux",
    icon: "logos:linux-tux",
    tags: ["CLI", "Server"],
  },
  {
    name: "Python",
    icon: "logos:python",
    tags: ["Scripting", "Backend"],
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
    tags: ["Database", "Server"],
  },
];
</script>

<template>
  <section class="w-full max-w-5xl mx-auto px-4">
    <div class="relative grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      <div
        v-for="(skill, index) in skills"
        :key="skill.name"
        data-card
        class="group relative border border-border-default rounded-xl p-4 bg-surface transition-all duration-300 shadow-lg hover:border-primary hover:-translate-y-1 hover:shadow-2xl"
        :data-delay="index * 70"
      >
        <div class="mb-3">
          <Icon
            :icon="skill.icon"
            class="w-8 h-8 text-default transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 class="mb-1 text-base font-semibold text-default font-sora">
          {{ skill.name }}
        </h3>

        <div class="flex flex-wrap gap-1 font-sora">
          <span
            v-for="tag in skill.tags"
            :key="tag"
            class="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary"
          >
            {{ tag }}
          </span>
        </div>

        <div
          class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-linear-to-br from-primary/10 to-transparent"
        />
      </div>
    </div>
  </section>
</template>
