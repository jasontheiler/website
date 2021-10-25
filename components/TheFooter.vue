<script setup lang="ts">
import IconNuxt from "~icons/simple-icons/nuxtdotjs";
import IconWindi from "~icons/file-icons/windi";
import IconCode from "~icons/ri/code-s-slash-fill";

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
        class="inline-flex hover:(text-[#00DC82])"
      >
        <IconNuxt />
      </a>
      and
      <a
        href="https://windicss.org/"
        target="_blank"
        title="Windi CSS"
        class="inline-flex hover:(text-[#48b0f1])"
      >
        <IconWindi />
      </a>
    </p>

    <p class="mb-4">
      <a
        href="https://github.com/jasontheiler/website"
        target="_blank"
        class="flex items-center gap-2 text-sm text-gray-500 hover:(text-gray-400)"
      >
        <IconCode /> Source code
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

<style>
.awd {
  color: #48b0f1;
}
</style>
