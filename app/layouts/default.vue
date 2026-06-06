<template>
  <div>
    <header class="fixed top-4 right-15 z-50">
      <div class="flex items-center gap-4">
        <NavColorSelector />
        <NavLanguageSelect />
        <NavCVDownload />
      </div>
    </header>

    <footer
      class="fixed bottom-6 h-24 w-full flex items-center justify-center z-50"
    >
      <NavMenuSelector class="grow" />
    </footer>

    <NuxtPage />
  </div>
</template>

<script lang="ts" setup></script>
