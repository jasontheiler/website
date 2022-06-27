<script lang="ts" setup>
import NProgress from "nprogress";

import "nprogress/nprogress.css";

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:start", () => {
  NProgress.start();
});
nuxtApp.hook("page:finish", () => {
  NProgress.done();
});
</script>

<template>
  <TheBackground />

  <TheNavBar />

  <NuxtPage />

  <TheFooter />
</template>

<style>
:focus:not(:focus-visible) {
  @apply !outline-none;
}

body {
  @apply bg-dark-900 font-sans text-gray-400;

  scrollbar-width: thin;
  scrollbar-color: #52525b transparent;
}

body::-webkit-scrollbar {
  @apply w-8px h-8px;
}

body::-webkit-scrollbar-track {
  @apply bg-transparent;
}

body::-webkit-scrollbar-thumb {
  @apply rounded-full bg-gray-700 hover:(bg-gray-600);
}
</style>
