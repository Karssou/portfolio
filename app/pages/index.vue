<script lang="ts" setup>
useSeoMeta({
  ogTitle: "Alexandre Larue | Portfolio",
  ogDescription:
    "Site personnel d'Alexandre Larue, développeur junior orienté Nuxt, Vue et interfaces modernes.",
  ogImage:
    "https://alexandre-larue.fr/images/alexandre-larue-developpeur-web-freelance-full-stack.avif",

  twitterCard: "summary_large_image",
  twitterImage:
    "https://alexandre-larue.fr/images/alexandre-larue-developpeur-web-freelance-full-stack.avif",
});
</script>

<template>
  <main class="relative overflow-x-hidden pb-36">
    <h1 class="sr-only">
      Alexandre Larue - Développeur Web Freelance & Ingénieur Frontend
    </h1>
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

    <section id="home" class="scroll-mt-12 px-6 pt-12 sm:px-8 lg:px-12">
      <LandingPage />
    </section>

    <HomeCarrousel />

    <section id="about" class="mx-auto max-w-7xl px-4 py-16">
      <HomeAboutSection />
    </section>

    <section id="projects" class="scroll-mt-28 px-6 pt-20 sm:px-8 lg:px-12">
      <LazyHomeProjects hydrate-on-visible />
    </section>

    <section id="expertises" class="scroll-mt-28 px-6 pt-20 sm:px-8 lg:px-12">
      <ExpertiseSection />
    </section>

    <section id="services" class="scroll-mt-28 px-6 pt-20 sm:px-8 lg:px-12">
      <ServicesSection />
    </section>

    <section id="contact" class="scroll-mt-28 px-6 pt-24 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-7xl" data-section>
        <LazyHomeContactSection hydrate-on-visible />
      </div>
    </section>
  </main>
</template>
