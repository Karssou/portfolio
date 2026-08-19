<script lang="ts" setup></script>

<template>
  <section id="about" class="mx-auto max-w-7xl px-4 py-16">
    <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div class="relative mx-auto w-full max-w-md">
        <div
          class="aspect-square overflow-hidden rounded-2xl border border-border-default bg-surface/60 p-2 backdrop-blur-xl"
        >
          <img
            src="/images/alexandre-larue-developpeur-full-stack-person.avif"
            alt="Alexandre Larue - Développeur Web Freelance"
            class="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div
          class="absolute flex gap-2 -bottom-4 -right-4 rounded-xl border border-border-default bg-surface/90 px-4 py-2 font-sora text-xs font-semibold shadow-xl backdrop-blur-md"
        >
          <div class="w-4 h-4 rounded-full bg-green-500"></div>
          Disponible pour de nouveaux projets
        </div>
      </div>

      <div class="flex flex-col gap-4 font-sora">
        <span
          class="text-xs font-semibold uppercase tracking-wider text-primary"
        >
          À propos
        </span>
        <h2 class="font-title text-3xl font-bold sm:text-4xl">
          Concevoir des produits web avec rigueur et passion.
        </h2>
        <p class="text-sm leading-relaxed text-muted">
          Développeur web indépendant, je conçois des applications web modernes,
          rapides et évolutives. Mon objectif est de transformer des besoins
          complexes en interfaces fluides et intuitives.
        </p>
        <p class="text-sm leading-relaxed text-muted">
          Alliant une solide maîtrise de l'écosystème Vue / Nuxt et des
          architectures backend, j'accorde une importance capitale à la qualité
          du code, aux performances (SEO, temps de chargement) et à l'expérience
          utilisateur.
        </p>

        <div
          class="mt-4 grid grid-cols-2 gap-4 border-t border-border-default/60 pt-6"
        >
          <div>
            <span class="font-title text-2xl font-bold text-default">100%</span>
            <p class="text-xs text-muted">Code sur-mesure & optimisé</p>
          </div>
          <div>
            <span class="font-title text-2xl font-bold text-default"
              >Réactivité</span
            >
            <p class="text-xs text-muted">Communication fluide et continue</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
