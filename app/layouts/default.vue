<script lang="ts" setup>
import { Icon } from "@iconify/vue";

const { t, locales, setLocale, locale } = useI18n();
const { isMobile } = useResponsive();
const route = useRoute();
const localePath = useLocalePath();

const mobileMenuOpen = ref(false);
const isHome = computed(() => route.path === localePath("/"));

watch(isMobile, (mobile) => {
  if (!mobile) {
    mobileMenuOpen.value = false;
  }
});

const mobileNavItems = [
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
  {
    key: "navbar.contact",
    href: "#contact",
    icon: "material-symbols:mail-outline-rounded",
  },
];

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const selectLocale = async (code: string) => {
  await setLocale(code as "en" | "fr");
  closeMobileMenu();
};
</script>

<template>
  <div>
    <header class="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        v-if="isMobile && mobileMenuOpen"
        class="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
        aria-hidden="true"
        @click="closeMobileMenu"
      />

      <div class="mx-auto flex max-w-7xl items-start justify-between gap-4">
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="-translate-x-3 opacity-0"
          enter-to-class="translate-x-0 opacity-100"
          leave-active-class="absolute transition duration-200 ease-in"
          leave-from-class="translate-x-0 opacity-100"
          leave-to-class="-translate-x-3 opacity-0"
          mode="out-in"
        >
          <NuxtLink
            v-if="!isHome && !isMobile"
            :to="localePath('/')"
            class="group inline-flex items-center gap-2.5 rounded-full border border-border-default bg-surface/80 px-6 py-3.5 text-default shadow-md backdrop-blur-xl transition-all duration-300 hover:border-border-hover hover:bg-surface/50 hover:shadow-lg active:scale-95"
          >
            <Icon
              icon="material-symbols:chevron-left-rounded"
              class="size-5 shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span class="font-semibold">{{ t("navbar.home") }}</span>
          </NuxtLink>
        </Transition>

        <div
          v-if="!isMobile"
          class="ml-auto flex items-center gap-4 rounded-full border border-border-default bg-surface/30 px-4 py-3 shadow-2xl backdrop-blur-xl"
        >
          <NavColorSelector />
          <NavLanguageSelect />
          <NavCVDownload />
        </div>

        <div
          v-else
          class="flex w-full items-center justify-between rounded-full border border-border-default bg-surface/80 px-5 py-3 shadow-2xl backdrop-blur-xl"
        >
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="-translate-x-3 opacity-0"
            enter-to-class="translate-x-0 opacity-100"
            leave-active-class="absolute transition duration-200 ease-in"
            leave-from-class="translate-x-0 opacity-100"
            leave-to-class="-translate-x-3 opacity-0"
            mode="out-in"
          >
            <NuxtLink
              v-if="isHome"
              to="#home"
              class="group flex items-center gap-3 rounded-full border border-border-default bg-white/5 pl-3 pr-4 py-2 text-default transition-colors duration-300 hover:bg-white/10"
            >
              <span
                class="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-[0_10px_25px_rgba(255,157,0,0.35)]"
              >
                A
              </span>
              <span class="flex flex-col leading-none">
                <span class="font-sora text-sm font-semibold tracking-[0.08em]">
                  Alexandre
                </span>
                <span class="text-[10px] uppercase tracking-[0.3em] text-muted">
                  Portfolio
                </span>
              </span>
            </NuxtLink>

            <NuxtLink
              v-else
              :to="localePath('/')"
              class="group inline-flex items-center gap-2 rounded-full border border-border-default bg-white/5 px-4 py-3 text-default transition-colors duration-300 hover:bg-white/10"
            >
              <Icon
                icon="material-symbols:chevron-left-rounded"
                class="size-5 transition-transform duration-300 group-hover:-translate-x-1"
              />
              <span class="text-sm font-semibold">{{ t("navbar.home") }}</span>
            </NuxtLink>
          </Transition>

          <button
            class="flex items-center justify-center rounded-full border border-border-default bg-white/10 p-3 text-default transition-colors duration-300 hover:bg-white/20"
            :aria-expanded="mobileMenuOpen"
            aria-label="Ouvrir le menu"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <Icon
              :icon="
                mobileMenuOpen
                  ? 'material-symbols:close-rounded'
                  : 'material-symbols:menu-rounded'
              "
              class="size-6"
            />
          </button>
        </div>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2 scale-[0.98]"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-2 scale-[0.98]"
      >
        <div
          v-if="isMobile && mobileMenuOpen"
          class="relative z-50 mx-auto mt-3 max-w-7xl overflow-visible rounded-[1.75rem] border border-border-default bg-surface/90 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl"
        >
          <div class="grid gap-4 p-4">
            <nav
              v-if="isHome"
              class="grid gap-2 rounded-3xl border border-border-default bg-white/5 p-2"
            >
              <NuxtLink
                v-for="item in mobileNavItems"
                :key="item.key"
                :to="item.href"
                class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-default transition-colors duration-300 hover:bg-bg-hovered"
                @click="closeMobileMenu"
              >
                <Icon :icon="item.icon" class="size-5 text-primary" />
                <span>{{ t(item.key) }}</span>
              </NuxtLink>
            </nav>

            <div class="grid gap-3">
              <div
                class="grid gap-3 rounded-3xl border border-border-default bg-white/5 p-3"
              >
                <div class="grid gap-2">
                  <span class="text-xs uppercase tracking-[0.2em] text-muted">
                    Langue
                  </span>
                  <div class="grid grid-cols-2 gap-2">
                    <button
                      v-for="lang in locales"
                      :key="lang.code"
                      class="rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all duration-300"
                      :class="
                        lang.code === locale
                          ? 'border-primary bg-primary text-white shadow-[0_12px_30px_rgba(255,157,0,0.28)]'
                          : 'border-border-default bg-white/10 text-default hover:bg-white/20'
                      "
                      @click="selectLocale(lang.code)"
                    >
                      <span
                        class="block text-xs uppercase tracking-[0.24em] opacity-70"
                      >
                        {{ lang.code }}
                      </span>
                      <span class="block mt-1">{{ lang.name }}</span>
                    </button>
                  </div>
                </div>

                <NavColorSelector />
                <NavCVDownload />
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-4 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-4 opacity-0"
    >
      <footer
        v-if="isHome && !isMobile"
        class="fixed bottom-6 z-50 flex h-24 w-full items-center justify-center"
      >
        <NavMenuSelector class="grow" />
      </footer>
    </Transition>

    <NuxtPage />
  </div>
</template>
