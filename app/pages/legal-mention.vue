<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const { data } = await useAsyncData("legal-mention", () =>
  queryCollection("root").path("/legal-mention").first(),
);

useSeoMeta({
  title: "Alexandre Larue | Mentions Légales",
  description:
    "Page de mentions légale du site personnel de Alexandre LARUE et Alexandre LARUE EI.",

  ogTitle: "Alexandre Larue | Portfolio",
  ogDescription:
    "Page de mentions légale du site personnel de Alexandre LARUE et Alexandre LARUE EI.",
  ogImage:
    "https://alexandre-larue.fr/images/alexandre-larue-developpeur-web-freelance-full-stack.avif",

  twitterCard: "summary_large_image",
  twitterImage:
    "https://alexandre-larue.fr/images/alexandre-larue-developpeur-web-freelance-full-stack.avif",
});

const localePath = useLocalePath();
</script>

<template>
  <main
    class="relative overflow-x-hidden pb-36 scroll-mt-28 px-6 pt-28 sm:px-8 lg:px-12"
  >
    <NuxtLink
      :to="localePath('/')"
      class="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted transition-colors hover:text-primary"
    >
      <Icon
        icon="material-symbols:arrow-back-rounded"
        class="size-5 transition-transform group-hover:-translate-x-1"
      />
      Accueil
    </NuxtLink>
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

    <ContentRenderer
      :value="data!"
      class="project-content prose mt-6 max-w-none prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-default prose-headings:text-5xl prose-h2:mt-14 prose-h2:pt-8 prose-h2:text-4xl prose-h2:no-underline prose-h2:font-semibold prose-h2:sm:text-4xl prose-p:leading-8 prose-p:font-sora prose-p:font-light prose-p:text-default prose-strong:text-default prose-strong:font-bold prose-a:text-primary prose-a:font-title prose-a:no-underline prose-a:font-semibold prose-li:text-default prose-li:marker:text-primary"
    />
  </main>
</template>
