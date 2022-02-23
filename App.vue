<template>
  <TheNavBar />

  <NuxtPage />

  <TheFooter />
</template>

<style lang="scss">
:focus:not(:focus-visible) {
  @apply !outline-none;
}

body {
  @apply bg-gray-1000 font-sans text-gray-300;

  scrollbar-width: thin;
  scrollbar-color: #52525b transparent;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 9999px;
    background-color: #3f3f46;

    &:hover {
      background-color: #52525b;
    }
  }
}
</style>
