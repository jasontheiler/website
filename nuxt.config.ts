import { defineNuxtConfig } from "nuxt3";

// See: https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },

  buildModules: [
    // See: https://github.com/antfu/unocss
    "@unocss/nuxt",
    // See: https://vueuse.org/
    "@vueuse/nuxt",
    "~/content",
  ],

  css: ["@unocss/reset/tailwind.css", "@fontsource/inter/latin.css"],

  publicRuntimeConfig: {
    buildTime: new Date().toISOString(),
  },

  meta: {
    link: [
      { rel: "stylesheet", href: "https://www.monolisa.dev/api/fonts/initial" },
    ],
  },
});
