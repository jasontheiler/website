import { defineConfig } from "windicss/helpers";
import defaultTheme from "windicss/defaultTheme";

// See: https://windicss.org/guide/configuration.html
export default defineConfig({
  plugins: [
    // See: https://windicss.org/plugins/community/interaction-variants.html
    require("@windicss/plugin-interaction-variants"),
    // See: https://windicss.org/plugins/community/scrollbar.html
    require("@windicss/plugin-scrollbar"),
  ],

  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },

  variants: {
    scrollbar: ["rounded"],
  },
});
