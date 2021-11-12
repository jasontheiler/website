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
  @apply bg-dark-900 text-gray-300 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-thumb-dark-300 hover:(scrollbar-thumb-dark-100);
}
</style>
