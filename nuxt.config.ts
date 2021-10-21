import { defineNuxtConfig } from "nuxt3";

// See: https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    // See: https://github.com/windicss/nuxt-windicss
    "nuxt-windicss",
    // See: https://github.com/antfu/unplugin-icons
    "unplugin-icons/nuxt",
    // See: https://vueuse.org/
    "@vueuse/core/nuxt",
  ],

  css: ["@fontsource/inter/latin.css"],

  publicRuntimeConfig: {
    buildTime: new Date(),
  },
});
