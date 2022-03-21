import type { Rule, UserShortcuts } from "unocss";
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import type { Theme } from "@unocss/preset-uno";
import { colorToString, parseColor } from "@unocss/preset-mini/utils";

// See: https://github.com/antfu/unocss#configurations
export default defineConfig<Theme>({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "text-bottom",
      },
    }),
  ],

  theme: {
    fontFamily: {
      sans: ["Inter", presetUno().theme?.fontFamily?.sans].join(","),
      mono: ["MonoLisa", presetUno().theme?.fontFamily?.mono].join(","),
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

    gridColumn: {
      "span-outer": "outer-start / outer-end",
      "span-mid": "mid-start / mid-end",
      "span-inner": "inner-start / inner-end",
    },
  },

  rules: [
    [
      /^grid-cols-base/,
      ([], { theme }) => ({
        "grid-template-columns": `
            [outer-start]
            auto
            [mid-start]
            1rem
            [inner-start]
            minmax(0, calc(${theme.breakpoints?.md} - 2rem))
            [inner-end]
            1rem
            [mid-end]
            auto
            [outer-end]
          `,
      }),
    ],
    [
      /^bg-(.+)-perforated$/,
      ([, c], { theme }) => {
        const { cssColor, alpha } = parseColor(c, theme)!;

        if (cssColor)
          return {
            "background-image": `radial-gradient(transparent 1px, ${colorToString(
              cssColor,
              alpha
            )} 1px)`,
            "background-size": "4px 4px",
          };
      },
    ],
    [
      /^bg-foil$/,
      () => ({
        "background-image":
          "linear-gradient(-45deg, transparent 0%, rgba(255, 0, 0, 0.125) 16%, rgba(255, 255, 0, 0.125) 24%, rgba(0, 255, 0, 0.125) 32%, rgba(0, 255, 255, 0.125) 40%, rgba(0, 0, 255, 0.125) 48%, rgba(255, 0, 255, 0.125) 56%, transparent 72%)",
      }),
    ],
  ] as Rule<Theme>[],

  shortcuts: [
    ["grid-base", "grid grid-cols-base children:(col-span-inner)"],
  ] as UserShortcuts<Theme>,
});
