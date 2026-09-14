<script lang="ts" setup>
type FAQQuestion = {
  title: string;
  description: string;
};

const { t, tm } = useI18n();

const questions = computed(() => (tm("faq.questions") as FAQQuestion[]) || []);

const openIndex = ref<number | null>(null);

const toggleQuestion = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};

useSchemaOrg([
  defineWebPage({
    "@type": "FAQPage",
  }),
  defineQuestion({
    question: "Combien de temps faut-il pour créer mon site ?",
    answer:
      "Le délai de conception dépend de l’ampleur de votre projet. En moyenne, il faut compter entre 1 et 2 semaines pour un site vitrine...",
  }),
  defineQuestion({
    question: "Est-ce que le site et le nom de domaine m’appartiendront ?",
    answer: "Absolument ! Vous êtes à 100% propriétaire...",
  }),
  defineQuestion({
    question: "Que dois-je fournir pour démarrer le projet ?",
    answer:
      "Pour démarrer, j’ai simplement besoin de vos éléments de base... Je collabore avec Jeff Bond, Senior SEO Copywriter...",
  }),
  defineQuestion({
    question: "Quelle est votre stack technique de prédilection ?",
    answer: "Je suis spécialisé dans le développement Full-Stack...",
  }),
  defineQuestion({
    question: "Que se passe-t-il une fois le site mis en ligne ?",
    answer:
      "Une fois le site livré et mis en ligne, vous gardez une autonomie complète...",
  }),
]);
</script>

<template>
  <section
    class="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-16"
  >
    <HomeSectionHeading
      :title="t('faq.title')"
      :description="t('faq.description')"
      class="max-w-7xl w-full mx-auto mb-12 px-4"
    />

    <div class="w-full">
      <ul class="flex flex-col gap-4">
        <li
          v-for="(question, index) in questions"
          :key="question.title"
          class="border-border-default bg-surface/80 overflow-hidden rounded-2xl border transition-all duration-300 hover:border-border-default/80 hover:shadow-md"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            :aria-expanded="openIndex === index"
            @click="toggleQuestion(index)"
          >
            <span
              class="font-title font-semibold text-text-primary text-base sm:text-lg"
            >
              {{ question.title }}
            </span>

            <div
              class="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-muted transition-transform duration-300"
              :class="{
                'rotate-180': openIndex === index,
              }"
            >
              <Icon
                name="material-symbols:keyboard-arrow-down-rounded"
                class="size-5 transition-colors"
              />
            </div>
          </button>

          <div
            class="grid transition-[grid-template-rows] duration-300 ease-out"
            :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <div class="overflow-hidden">
              <p
                class="px-6 pb-6 pt-1 text-text-secondary text-sm leading-relaxed sm:text-base"
              >
                {{ question.description }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
