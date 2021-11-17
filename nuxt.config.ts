import { defineNuxtConfig } from "nuxt3";
import { presetIcons } from "unocss";

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
    "@vueuse/core/nuxt",
  ],

  build: {
    transpile: ["tslib"],
  },

  css: ["@fontsource/inter/latin.css"],

  unocss: {
    presets: [presetIcons({ scale: 1.2 })],
  },

  publicRuntimeConfig: {
    buildTime: new Date(),
  },
});
