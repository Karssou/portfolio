<script lang="ts" setup>
const route = useRoute();

const { data: project } = await useAsyncData("projects", () =>
  queryCollection("content").path(`/projects/${route.params.projects}`).first(),
);
</script>

<template>
  <main v-if="project" class="max-w-4xl mx-auto py-20">
    <h1 class="text-5xl font-bold">
      {{ project.title }}
    </h1>

    <p class="mt-4 text-gray-400">
      {{ project.description }}
    </p>

    <div class="mt-10 prose prose-invert">
      <ContentRenderer :value="project" />
    </div>
  </main>
</template>
