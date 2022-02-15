<template>
  <TheNavBar />

  <NuxtPage />

  <TheFooter />
</template>

<style>
:focus:not(:focus-visible) {
  @apply !outline-none;
}

body {
  @apply bg-gray-1000 text-gray-300 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-thumb-gray-700 hover:(scrollbar-thumb-gray-600);
}
</style>
