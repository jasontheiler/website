<script lang="ts" setup>
import { formatDate } from "~/utils";

const { buildTime } = useRuntimeConfig();
</script>

<template>
  <footer class="my-16 grid-base text-center">
    <p>
      Built with
      <AppLink
        to="https://nuxtjs.org/"
        target="_blank"
        title="NuxtJS"
        class="hover:(text-#00DC82)"
        ><span class="i-simple-icons:nuxtdotjs" /></AppLink
      >, powered by
      <AppLink
        to="https://vercel.com/"
        target="_blank"
        title="Vercel"
        class="i-simple-icons:vercel hover:(text-white)"
        ><span class="i-simple-icons:vercel"
      /></AppLink>
    </p>

    <p class="mb-4 text-sm">
      <AppLink
        to="https://github.com/jasontheiler/website"
        target="_blank"
        class="text-gray-500 hover:(text-gray-400)"
      >
        <span class="i-ri:code-s-slash-fill" /> Source code
      </AppLink>
    </p>

    <p>
      © 2021-PRESENT
      <AppLink
        to="https://github.com/jasontheiler"
        target="_blank"
        class="hover:(text-white)"
      >
        Jason Theiler
      </AppLink>
    </p>

    <p class="italic text-sm text-gray-500">
      Last updated: {{ formatDate(buildTime) }}
    </p>
  </footer>
</template>
