import { defineNuxtConfig } from "nuxt3";

// See: https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ["nuxt-windicss", "unplugin-icons/nuxt"],
  css: ["@fontsource/inter/latin.css"],
});
