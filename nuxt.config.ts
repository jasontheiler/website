import { defineNuxtConfig } from "nuxt3";

import Content from "./content";

// See: https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [Content()],
  },

  buildModules: [
    // See: https://github.com/windicss/nuxt-windicss
    "nuxt-windicss",
    // See: https://github.com/antfu/unocss
    "@unocss/nuxt",
    // See: https://vueuse.org/
    "@vueuse/nuxt",
  ],

  css: ["@fontsource/inter/latin.css"],

  publicRuntimeConfig: {
    buildTime: new Date(),
  },
});
