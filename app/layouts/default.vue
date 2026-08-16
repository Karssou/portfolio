<script lang="ts" setup>
import { Icon } from "@iconify/vue";

useSchemaOrg([
  definePerson({
    name: "Alexandre Larue",
    url: "https://alexandre-larue.fr",
    image:
      "https://alexandre-larue.fr/images/alexandre-larue-developpeur-web-freelance-full-stack.avif",
    jobTitle: "Développeur Full Stack orienté Cloud",
    description:
      "Alexandre Larue est un développeur français spécialisé dans le développement Full Stack, les architectures backend, le Cloud Computing et les technologies DevOps.",
    knowsAbout: [
      "Python",
      "FastAPI",
      "TypeScript",
      "Nuxt",
      "Vue.js",
      "Docker",
      "Linux",
      "PostgreSQL",
      "MinIO",
      "Cloud Computing",
      "DevOps",
    ],
    sameAs: [
      "https://github.com/Karssou",
      "https://linkedin.com/in/alexandre-larue44",
      "https://www.malt.fr/profile/alexandrelarue",
      "https://fr.fiverr.com/s/XLGgggZ",
    ],
    worksFor: {
      name: "Alexandre Larue",
      url: "https://alexandre-larue.fr",
    },
    alumniOf: [
      {
        name: "Saint-Félix",
      },
    ],
    hasOccupation: {
      name: "Full Stack Developer",
      occupationalCategory: "Software Developer",
      description:
        "Développeur spécialisé dans les applications web modernes, les architectures backend et les technologies Cloud.",
    },
    knowsLanguage: ["French", "English", "Spanish"],
    contactPoint: {
      contactType: "professional inquiries",
      url: "https://alexandre-larue.fr/#contact",
    },
  }),
  defineWebSite({
    name: "Alexandre Larue",
    description:
      "Official portfolio of Alexandre Larue, Full Stack Developer specialized in Web Development, Cloud Computing, DevOps and backend architectures.",
    inLanguage: ["fr", "en"],
    url: "https://alexandre-larue.fr",

    copyrightHolder: {
      "@id": "https://alexandre-larue.fr/#person",
    },

    creator: {
      "@id": "https://alexandre-larue.fr/#person",
    },

    image: {
      "@type": "ImageObject",
      url: "https://alexandre-larue.fr/images/alexandre-larue-developpeur-web-freelance-full-stack.avif",
    },

    publisher: {
      "@id": "https://alexandre-larue.fr/#person",
    },
  }),
]);

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
const NavItems = [
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
      <ClientOnly>
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
          </Transition>

          <div
            v-if="!isMobile"
            class="flex gap-4 items-center rounded-full border border-border-default bg-surface/30 px-4 py-3 shadow-2xl backdrop-blur-xl"
          >
            <NuxtLink class="px-1" :to="localePath('/')">
              <NuxtImg
                src="/images/logo-squared.png"
                height="40"
                width="40"
                alt="Logo"
              />
            </NuxtLink>
            <div>
              <ul
                class="flex items-center justify-between gap-x-2 text-default whitespace-nowrap"
              >
                <li
                  v-for="item in NavItems"
                  :key="item.key"
                  class="flex items-center rounded-full px-4 py-2 transition-all duration-200 ease-out hover:bg-bg-hovered hover:shadow-md"
                >
                  <NuxtLink :to="item.href" class="flex items-center">
                    <span
                      class="select-none transition-all duration-300 ease-out"
                    >
                      {{ t(item.key) }}
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <div
            v-if="!isMobile"
            class="flex items-center gap-4 rounded-full border border-border-default bg-surface/30 px-4 py-3 shadow-2xl backdrop-blur-xl"
          >
            <NavColorSelector />
            <NavLanguageSelect />
            <NavAuditCTA />
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
              <NavAuditCTA />
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
                  v-for="item in NavItems"
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
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </ClientOnly>
    </header>

    <NuxtPage />
    <footer
      class="flex flex-col items-center justify-between text-muted pb-15 px-6 md:flex-row md:pb-4"
    >
      <p class="text-center">
        &copy; 2026 Alexandre LARUE. Tous droits réservés.
      </p>
      <NuxtLink
        :prefetch="false"
        href="/legal-mention"
        no
        class="hover:underline"
        >Mentions légales</NuxtLink
      >
    </footer>
  </div>
</template>
