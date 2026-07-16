<script lang="ts" setup>
useSeoMeta({
  title: "Alexandre Larue | Développeur Full-Stack",
  description:
    "Portfolio personnel d'Alexandre Larue, développeur junior orienté Nuxt, Vue et interfaces modernes.",

  ogTitle: "Alexandre Larue | Portfolio",
  ogDescription:
    "Portfolio personnel d'Alexandre Larue, développeur junior orienté Nuxt, Vue et interfaces modernes.",
  ogImage:
    "https://alexandre-larue.fr/images/alexandre-larue-developpeur-web-freelance-full-stack.avif",

  twitterCard: "summary_large_image",
  twitterImage:
    "https://alexandre-larue.fr/images/alexandre-larue-developpeur-web-freelance-full-stack.avif",
});
</script>

<template>
  <main ref="pageRoot" class="relative overflow-x-hidden pb-36">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        data-orb
        class="absolute left-0 top-0 h-72 w-72 -translate-x-1/3 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        data-orb
        class="absolute bottom-24 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-primary/10 blur-3xl"
      />
    </div>
  </main>
</template>
