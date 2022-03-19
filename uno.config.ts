import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import type { Rule, UserShortcuts } from "@unocss/core";
import type { Theme } from "@unocss/preset-uno";
import { colorToString, handler, parseColor } from "@unocss/preset-mini/utils";

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
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ].join(","),
      mono: [
        "MonoLisa",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ].join(","),
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
      /^grid-cols-base-(.+)$/,
      ([, s], { theme }) => {
        const space = theme.width?.[s] ?? handler.bracket.fraction.rem(s);

        if (space)
          return {
            "grid-template-columns": `
            [outer-start]
            auto
            [mid-start]
            ${space}
            [inner-start]
            minmax(0, calc(${theme.breakpoints?.["xl"]} - (2 * ${space})))
            [inner-end]
            ${space}
            [mid-end]
            auto
            [outer-end]
          `,
          };
      },
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
    [
      "grid-base",
      "grid grid-cols-base-4 sm:grid-cols-base-6 children:(col-span-inner)",
    ],
  ] as UserShortcuts<Theme>,
});
