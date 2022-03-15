import {
  defineConfig,
  escapeSelector,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

// See: https://github.com/antfu/unocss#configurations
export default defineConfig({
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
      ],
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
      ],
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
      "span-viewport": "viewport-start / viewport-end",
      "span-page": "page-start / page-end",
      "span-content": "content-start / content-end",
    },
  },

  rules: [
    [
      /^grid-base$/,
      ([], { theme, constructCSS }) => {
        // @ts-expect-error
        const { md, xl } = theme.breakpoints;

        return `
          ${constructCSS({
            "--grid-base-viewport": 0,
            "--grid-base-gap": "1rem",
            "--grid-base-col": "1fr",
            display: "grid",
            "grid-template-columns": `
              [viewport-start]
              var(--grid-base-viewport)
              [page-start]
              var(--grid-base-gap)
              [content-start col-start]
              repeat(11, var(--grid-base-col) [col-end] var(--grid-base-gap) [col-start]) var(--grid-base-col)
              [content-end col-end]
              var(--grid-base-gap)
              [page-end]
              var(--grid-base-viewport)
              [viewport-end]
            `,
          })}

          @media (min-width: ${md}) {
            ${constructCSS({
              "--grid-base-gap": "1.5rem",
            })}
          }

          @media (min-width: ${xl}) {
            ${constructCSS({
              "--grid-base-viewport": "auto",
              "--grid-base-col": `calc((${xl} - (13 * var(--grid-base-gap))) / 12)`,
            })}
          }
        `;
      },
    ],
    [
      /^bg-(\w+)-(\d+)-perforated$/,
      ([, color, shade], { theme }) => {
        // @ts-expect-error
        if (theme.colors[color][shade])
          return {
            // @ts-expect-error
            "background-image": `radial-gradient(transparent 1px, ${theme.colors[color][shade]} 1px)`,
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
  ],
});
