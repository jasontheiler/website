<template>
  <header
    class="fixed inset-x-0 top-0 z-50 grid-base bg-dark-900-perforated backdrop-filter backdrop-blur-sm"
  >
    <div class="h-18 flex justify-between items-center">
      <div />

      <nav class="flex gap-6">
        <AppLink :to="{ name: 'notes' }" class="hover:(text-white)">
          Notes
        </AppLink>

        <AppLink :to="{ name: 'tools' }" class="hover:(text-white)">
          Tools
        </AppLink>

        <AppLink
          to="https://github.com/jasontheiler"
          target="_blank"
          class="group hover:(text-white)"
        >
          GitHub
          <span
            class="i-ri:external-link-fill text-gray-500 group-hover:(text-gray-400)"
          />
        </AppLink>
      </nav>
    </div>
  </header>
</template>

<style>
body {
  @apply scroll-pt-18;
}
</style>
