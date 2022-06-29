import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { type Theme } from "@unocss/preset-uno";
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
    gridColumn: {
      "span-outer": "outer-start / outer-end",
      "span-mid": "mid-start / mid-end",
      "span-inner": "inner-start / inner-end",
    },
  },

  extendTheme: [
    ({ fontFamily }) => {
      fontFamily!.sans = ["Inter", fontFamily!.sans].join(",");
      fontFamily!.mono = ["MonoLisa", fontFamily!.mono].join(",");
    },
  ],

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
            minmax(0, calc(${theme.breakpoints?.md} - (2 * ${space})))
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
  ],

  shortcuts: [["grid-base", "grid grid-cols-base-4 children:(col-span-inner)"]],
});
