<template>
  <header
    class="fixed left-0 top-0 z-50 w-full h-18 bg-perforated backdrop-filter backdrop-blur-sm"
  >
    <div
      class="w-full max-w-screen-xl h-full mx-auto px-4 flex justify-between items-center sm:(px-6)"
    >
      <div />

      <nav class="flex gap-6">
        <NuxtLink :to="{ name: 'notes' }" class="mx-2 hover:(text-white)">
          Notes
        </NuxtLink>

        <NuxtLink :to="{ name: 'tools' }" class="hover:(text-white)">
          Tools
        </NuxtLink>

        <a
          href="https://github.com/jasontheiler"
          target="_blank"
          class="group flex items-center gap-1 hover:(text-white)"
        >
          GitHub
          <div
            class="i-ri-external-link-fill text-sm text-gray-500 group-hover:(text-gray-400)"
          />
        </a>
      </nav>
    </div>
  </header>
</template>

<style>
body {
  scroll-padding-top: 4.5rem;
}
</style>

<style scoped>
.bg-perforated {
  background-image: radial-gradient(
    rgba(15, 15, 15, 0.33) 1px,
    rgba(15, 15, 15, 1) 1px
  );
  background-size: 4px 4px;
}
</style>
