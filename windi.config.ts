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
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      backgroundImage: {
        foil:
          "linear-gradient(-45deg, transparent 0%, rgba(255, 0, 0, 0.125) 16%, rgba(255, 255, 0, 0.125) 24%, rgba(0, 255, 0, 0.125) 32%, rgba(0, 255, 255, 0.125) 40%, rgba(0, 0, 255, 0.125) 48%, rgba(255, 0, 255, 0.125) 56%, transparent 72%)",
      },
    },
  },

  variants: {
    scrollbar: ["rounded"],
  },
});
