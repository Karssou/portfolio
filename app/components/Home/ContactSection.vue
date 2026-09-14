<script lang="ts" setup>
const { t } = useI18n();
const activeTab = ref<"form" | "cal">("form");
</script>

<template>
  <section
    class="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-16"
  >
    <HomeSectionHeading
      kicker="Contact"
      :title="t('contact.title')"
      :description="t('contact.lead')"
    />

    <div
      class="mt-8 flex items-center justify-center rounded-full border border-border-default bg-surface/60 p-1.5 shadow-sm backdrop-blur-md transition-all duration-300"
    >
      <button
        type="button"
        class="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-out cursor-pointer active:scale-95"
        :class="
          activeTab === 'form'
            ? 'bg-primary text-default shadow-md scale-100'
            : 'text-muted hover:text-default hover:bg-surface/40'
        "
        @click="activeTab = 'form'"
      >
        <Icon name="material-symbols:mail-outline-rounded" class="size-4" />
        <span>Envoyer un message</span>
      </button>

      <button
        type="button"
        class="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-out cursor-pointer active:scale-95"
        :class="
          activeTab === 'cal'
            ? 'bg-primary text-default shadow-md scale-100'
            : 'text-muted hover:text-default hover:bg-surface/40'
        "
        @click="activeTab = 'cal'"
      >
        <Icon
          name="material-symbols:calendar-today-outline-rounded"
          class="size-4"
        />
        <span>Réserver un appel</span>
      </button>
    </div>

    <div class="mt-8 flex w-full shrink items-center justify-center min-h-120">
      <Transition
        mode="out-in"
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-2 scale-98 blur-sm"
        enter-to-class="opacity-100 translate-y-0 scale-100 blur-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100 blur-0"
        leave-to-class="opacity-0 -translate-y-2 scale-98 blur-sm"
      >
        <div v-if="activeTab === 'form'" key="form" class="w-full max-w-xl">
          <ContactForm />
        </div>

        <div
          v-else
          key="cal"
          class="flex w-full max-w-xl flex-col items-center justify-center gap-6 rounded-3xl border border-border-default bg-surface/60 p-8 text-center shadow-lg backdrop-blur-xl sm:p-10"
        >
          <!-- Icône / Badge visuel -->
          <div
            class="flex size-14 items-center justify-center rounded-2xl border border-border-default bg-surface/80 text-primary shadow-sm"
          >
            <Icon
              name="material-symbols:calendar-today-outline-rounded"
              class="size-7"
            />
          </div>

          <div class="flex flex-col gap-2">
            <h3
              class="font-title text-xl font-semibold text-default sm:text-2xl"
            >
              Réserver un échange découverte
            </h3>
            <p class="max-w-md text-sm leading-relaxed text-muted">
              Choisissez un créneau dans mon agenda pour discuter 15 minutes de
              votre projet, de vos besoins techniques ou de vos objectifs.
            </p>
          </div>


          <ul
            class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-default/80"
          >
            <li class="flex items-center gap-1.5">
              <Icon
                name="material-symbols:schedule-outline-rounded"
                class="size-4 text-primary"
              />
              <span>15 minutes</span>
            </li>
            <li class="flex items-center gap-1.5">
              <Icon
                name="material-symbols:videocam-outline-rounded"
                class="size-4 text-primary"
              />
              <span>Google Meet</span>
            </li>
            <li class="flex items-center gap-1.5">
              <Icon
                name="material-symbols:payments-outline-rounded"
                class="size-4 text-primary"
              />
              <span>Gratuit & sans engagement</span>
            </li>
          </ul>

          <div class="mt-2 w-full sm:w-auto">
            <ContactCal />
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>
