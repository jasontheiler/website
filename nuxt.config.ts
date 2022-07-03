import { defineNuxtConfig } from "nuxt";

// See: https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },

  srcDir: "./src",

  build: {
    transpile: ["motion"],
  },

  modules: [
    // See: https://content.nuxtjs.org/
    "@nuxt/content",
    // See: https://github.com/antfu/unocss
    "@unocss/nuxt",
    // See: https://vueuse.org/
    "@vueuse/nuxt",
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

  content: {
    highlight: {
      theme: "vitesse-dark",
    },
  },
});
