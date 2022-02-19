<script lang="ts" setup>
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
    <p class="flex items-center">
      Built with&nbsp;
      <AppLink
        to="https://nuxtjs.org/"
        title="NuxtJS"
        class="i-simple-icons-nuxtdotjs hover:(text-[#00DC82])"
      />
      , powered by&nbsp;
      <AppLink
        to="https://vercel.com/"
        title="Vercel"
        class="i-simple-icons-vercel hover:(text-white)"
      />
    </p>

    <p class="mb-4">
      <AppLink
        to="https://github.com/jasontheiler/website"
        class="flex items-center gap-2 text-sm text-gray-500 hover:(text-gray-400)"
      >
        <span class="i-ri-code-s-slash-fill" /> Source code
      </AppLink>
    </p>

    <p>
      © 2021-PRESENT
      <AppLink to="https://github.com/jasontheiler">Jason Theiler</AppLink>
    </p>

    <p class="italic text-sm text-gray-500">Last updated: {{ lastUpdated }}</p>
  </footer>
</template>
