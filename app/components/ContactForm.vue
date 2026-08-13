<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { z } from "zod";

const { t } = useI18n();

const isLoading = ref(false);
const isSuccess = ref(false);
const errors = ref<Partial<Record<keyof ContactForm, string>>>({});
const errorMessage = ref("");

const reasonOptions = [
  "website",
  "redesign",
  "webapp",
  "seo",
  "maintenance",
  "other",
];

const reasonIcons: Record<string, string> = {
  website: "material-symbols:language",
  redesign: "material-symbols:refresh-rounded",
  webapp: "material-symbols:web-rounded",
  seo: "material-symbols:speed-rounded",
  maintenance: "material-symbols:build-rounded",
  other: "material-symbols:more-horiz-rounded",
};

const contactSchema = z.object({
  firstname: z
    .string()
    .trim()
    .min(2, "Le prénom doit contenir au moins 2 caractères.")
    .max(50, "Le prénom est trop long."),

  lastname: z
    .string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .max(50, "Le nom est trop long."),

  phonenumber: z
    .string()
    .trim()
    .refine((value) => {
      if (value === "") return true;

      const normalized = value.replace(/[\s.-]/g, "");

      return /^(0[1-9]\d{8}|\+33[1-9]\d{8}|0033[1-9]\d{8})$/.test(normalized);
    }, "Veuillez entrer un numéro de téléphone français valide."),
  mail: z.string().trim().max(254, "L'adresse email est trop longue."),

  reasons: z
    .array(z.string())
    .min(1, "Veuillez sélectionner au moins un besoin.")
    .refine(
      (reasons) => reasons.every((reason) => reasonOptions.includes(reason)),
      "Une des options sélectionnées n'est pas valide.",
    ),

  details: z.string().trim().max(5000, "Votre message est trop long."),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactForm = ref<ContactForm>({
  firstname: "",
  lastname: "",
  phonenumber: "",
  mail: "",
  reasons: [],
  details: "",
});

const submitForm = async () => {
  errorMessage.value = "";
  isSuccess.value = false;
  errors.value = {};

  const result = contactSchema.safeParse(contactForm.value);

  if (!result.success) {
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof ContactForm;

      if (!errors.value[field]) {
        errors.value[field] = issue.message;
      }
    }

    return;
  }

  isLoading.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    isSuccess.value = true;

    contactForm.value = {
      firstname: "",
      lastname: "",
      phonenumber: "",
      mail: "",
      reasons: [],
      details: "",
    };
  } catch {
    errorMessage.value =
      "Erreur. Veuillez réessayer ou me contacter par email.";
  } finally {
    isLoading.value = false;
  }
};

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  return digits.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
};

const isFormCompleted = computed(() => {
  return Boolean(
    contactForm.value.firstname &&
    contactForm.value.lastname &&
    contactForm.value.mail &&
    contactForm.value.reasons.length > 0,
  );
});
</script>

<template>
  <section
    class="flex items-center justify-center rounded-3xl font-sora border border-border-default bg-linear-to-br from-surface/60 via-surface/70 to-surface/60 p-12 pb-5 shadow-lg backdrop-blur-xl"
  >
    <form
      class="w-full h-full flex flex-col text-sm gap-6 justify-between"
      @submit.prevent="submitForm"
    >
      <section class="flex flex-col gap-6">
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label for="firstname" class="text-sm font-medium text-default">
              {{ t("contact.form.firstname") }}
            </label>

            <div class="relative">
              <Icon
                icon="material-symbols:person-outline-rounded"
                class="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted"
              />

              <input
                id="firstname"
                v-model="contactForm.firstname"
                class="w-full rounded-2xl border border-border-default bg-surface/50 py-2 pl-11 pr-4 text-sora outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                type="text"
                name="firstname"
                autocomplete="given-name"
                placeholder="Alexandre"
                required
              />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="lastname" class="text-sm font-medium text-default">
              {{ t("contact.form.lastname") }}
            </label>

            <div class="relative">
              <Icon
                icon="material-symbols:badge-outline-rounded"
                class="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted"
              />

              <input
                id="lastname"
                v-model="contactForm.lastname"
                class="w-full rounded-2xl border border-border-default bg-surface/50 py-2 pl-11 pr-4 text-sora outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                type="text"
                name="lastname"
                autocomplete="family-name"
                placeholder="Larue"
                required
              />
            </div>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm font-medium text-default">
              {{ t("contact.form.mail") }}
            </label>

            <div class="relative">
              <Icon
                icon="material-symbols:mail-outline-rounded"
                class="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted"
              />

              <input
                id="email"
                v-model="contactForm.mail"
                class="w-full rounded-2xl border border-border-default bg-surface/50 py-2 pl-11 pr-4 text-sora outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                type="email"
                name="email"
                autocomplete="email"
                placeholder="vous@entreprise.fr"
                required
              />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="phone" class="text-sm font-medium text-default">
              {{ t("contact.form.phone") }}
              <span class="text-muted">{{ t("contact.form.optional") }}</span>
            </label>

            <div class="relative">
              <Icon
                icon="material-symbols:call-outline-rounded"
                class="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted"
              />

              <input
                id="phone"
                v-model="contactForm.phonenumber"
                class="w-full rounded-2xl border border-border-default bg-surface/50 py-2 pl-11 pr-4 text-sora outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                type="tel"
                name="phone"
                autocomplete="tel"
                inputmode="tel"
                placeholder="06 12 34 56 78"
                pattern="(?:(?:\+|00)33[\s.-]?[1-9](?:[\s.-]?\d{2}){4}|0[1-9](?:[\s.-]?\d{2}){4})"
                minlength="10"
                maxlength="14"
                aria-describedby="phone-hint"
                @input="
                  contactForm.phonenumber = formatPhone(contactForm.phonenumber)
                "
              />
            </div>
          </div>
        </div>

        <fieldset class="flex flex-col gap-3">
          <legend class="mb-2 text-sm font-medium text-default">
            {{ t("contact.form.reasoncta") }}
          </legend>

          <div class="flex flex-wrap gap-2">
            <label
              v-for="reason in reasonOptions"
              :key="reason"
              class="cursor-pointer select-none"
            >
              <input
                v-model="contactForm.reasons"
                class="peer sr-only"
                type="checkbox"
                name="reasons"
                :value="reason"
              />

              <span
                class="inline-flex items-center gap-2 rounded-full border border-border-default bg-surface px-4 py-2 text-sm transition hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10"
              >
                <Icon :icon="reasonIcons[reason!]!" class="size-4" />

                {{ t(`contact.form.reasons.${reason}`) }}
              </span>
            </label>
          </div>
        </fieldset>

        <div class="flex flex-col gap-2">
          <label for="details" class="text-sm font-medium text-default">
            {{ t(`contact.form.morecta`) }}
            <span class="text-muted">{{ t("contact.form.optional") }}</span>
          </label>

          <div class="relative">
            <Icon
              icon="material-symbols:description-outline-rounded"
              class="pointer-events-none absolute left-4 top-4 size-5 text-muted"
            />

            <textarea
              id="details"
              v-model="contactForm.details"
              class="min-h-32 w-full resize-none rounded-2xl border border-border-default bg-surface/50 py-3 pl-11 pr-4 text-sora outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              name="details"
              rows="5"
              :placeholder="t('contact.form.moreplaceholder')"
            />
          </div>
        </div>
      </section>
      <section class="w-full h-15 flex justify-end items-center">
        <span class="ml-auto max-w-2/3">{{ errorMessage }}</span>
        <button
          type="submit"
          :disabled="isLoading || !isFormCompleted"
          class="inline-flex min-w-42 items-center justify-center gap-2 border border-primary rounded-full bg-primary px-5 py-3 text-sm font-semibold text-default transition duration-200 hover:bg-transparent hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Icon
            v-if="isLoading"
            icon="material-symbols:progress-activity"
            class="size-4 animate-spin"
          />
          <span>{{ t("contact.form.submit") }}</span>

          <Icon
            v-if="!isLoading"
            icon="material-symbols:arrow-outward-rounded"
            class="size-4"
          />
        </button>
      </section>
    </form>
  </section>
</template>
