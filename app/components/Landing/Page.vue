<script lang="ts" setup></script>

<template>
  <section class="relative w-full h-screen">
    <!-- Les trucs svg -->
    <div
      class="absolute top-0 right-0 w-1/2 min-h-200 h-full opacity-10 pointer-events-none mix-blend-screen"
    >
      <svg
        class="w-full h-full text-primary"
        preserveaspectratio="none"
        viewbox="0 0 100 100"
      >
        <line
          class="animate-[dash_10s_linear_infinite]"
          stroke="currentColor"
          stroke-width="0.5"
          x1="0"
          x2="100"
          y1="100"
          y2="0"
        ></line>
        <line
          class="animate-[dash_15s_linear_infinite_reverse]"
          stroke="currentColor"
          stroke-width="0.2"
          x1="0"
          x2="100"
          y1="80"
          y2="-20"
        ></line>
        <line
          class="animate-[dash_12s_linear_infinite]"
          stroke="currentColor"
          stroke-width="0.3"
          x1="20"
          x2="120"
          y1="100"
          y2="0"
        ></line>
      </svg>
    </div>
    <section class="flex flex-col items-center lg:flex-row w-2/3 h-full">
      <LandingTitle />
    </section>
  </section>
</template>
