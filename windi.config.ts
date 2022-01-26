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
      screens: {
        xs: "384px",
      },

      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["MonoLisa", ...defaultTheme.fontFamily.mono],
      },

      colors: {
        gray: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          1000: "#0e0e10",
        },
      },

      backgroundImage: {
        foil: "linear-gradient(-45deg, transparent 0%, rgba(255, 0, 0, 0.125) 16%, rgba(255, 255, 0, 0.125) 24%, rgba(0, 255, 0, 0.125) 32%, rgba(0, 255, 255, 0.125) 40%, rgba(0, 0, 255, 0.125) 48%, rgba(255, 0, 255, 0.125) 56%, transparent 72%)",
      },
    },
  },

  variants: {
    scrollbar: ["rounded"],
  },
});
