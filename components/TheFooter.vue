<script setup lang="ts">
const { buildTime } = useRuntimeConfig();
const lastUpdated = new Date(buildTime).toLocaleString("en-US", {
  timeZone: "UTC",
  dateStyle: "medium",
  timeStyle: "long",
  hour12: false,
});
</script>

<template>
  <footer
    class="w-full max-w-screen-xl mx-auto my-16 px-4 flex flex-col items-center leading-loose text-center sm:(px-6)"
  >
    <p class="flex items-center gap-2">
      Powered by
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        title="NuxtJS"
        class="i-simple-icons-nuxtdotjs hover:(text-[#00DC82])"
      />
      and
      <a
        href="https://windicss.org/"
        target="_blank"
        title="Windi CSS"
        class="i-file-icons-windi hover:(text-[#48b0f1])"
      />
    </p>

    <p class="mb-4">
      <a
        href="https://github.com/jasontheiler/website"
        target="_blank"
        class="flex items-center gap-2 text-sm text-gray-500 hover:(text-gray-400)"
      >
        <span class="i-ri-code-s-slash-fill" /> Source code
      </a>
    </p>

    <p>
      © {{ new Date().getFullYear() }}
      <a
        href="https://github.com/jasontheiler"
        target="_blank"
        class="hover:(text-white)"
      >
        Jason Theiler
      </a>
    </p>

    <p class="italic text-sm text-gray-500">Last updated: {{ lastUpdated }}</p>
  </footer>
</template>
