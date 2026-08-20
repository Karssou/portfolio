<script lang="ts" setup>
const { t } = useI18n();
</script>

<template>
  <HomeSectionHeading
    kicker="Contact"
    :title="t('contact.title')"
    :description="t('contact.lead')"
  />
  <section class="mt-5 flex items-center justify-center shrink">
    <ContactForm class="max-w-xl" />
  </section>
</template>
