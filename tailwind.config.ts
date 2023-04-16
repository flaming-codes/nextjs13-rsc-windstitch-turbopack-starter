import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindTypography from "@tailwindcss/typography";
// @ts-expect-error - No types available for these packages.
import windyRadixPalette from "windy-radix-palette";
// @ts-expect-error - No types available for these packages.
import windyRadixTypography from "windy-radix-typography";

function pxRem(px: number): string {
  return `${px / 16}rem`;
}

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [windyRadixPalette, windyRadixTypography, tailwindTypography],
  darkMode: "media",
  theme: {
    // Reset default colors w/ custom ones & inherit the plugin's colors.
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      "160-fluid": [`min(10vw, ${pxRem(160)})`, { lineHeight: "1.1" }],
      "144-fluid": [`min(9vw, ${pxRem(144)})`, { lineHeight: "1.1" }],
      "120-fluid": [`min(7.5vw, ${pxRem(120)})`, { lineHeight: "1.1" }],
      "80-fluid": [`min(5vw, ${pxRem(80)})`, { lineHeight: "1.1" }],
      "72-fluid": [`min(4.5vw, ${pxRem(72)})`, { lineHeight: "1" }],
      "48-fluid": [`min(3vw, ${pxRem(48)})`, { lineHeight: "1" }],
      "40-fluid": [`min(2.5vw, ${pxRem(40)})`, { lineHeight: "1.2" }],
      "32-fluid": [`min(2vw, ${pxRem(32)})`, { lineHeight: "1.2" }],
      "24-fluid": [`min(1.5vw, ${pxRem(24)})`, { lineHeight: "1.2" }],
      "20-fluid": [`min(1.25vw, ${pxRem(20)})`, { lineHeight: "1.2" }],
      "18-fluid": [`min(1.125vw, ${pxRem(18)})`, { lineHeight: "1.2" }],
      "16-fluid": [
        `min(1vw, ${pxRem(16)})`,
        { lineHeight: "1.4", letterSpacing: "0.02em" },
      ],
      "14-fluid": [
        `min(0.875vw, ${pxRem(14)})`,
        { lineHeight: "1.4", letterSpacing: "0.02em" },
      ],
      "12-fluid": [
        `min(0.75vw, ${pxRem(12)})`,
        { lineHeight: "1.4", letterSpacing: "0.02em" },
      ],
      "10-fluid": [
        `min(0.625vw, ${pxRem(10)})`,
        { lineHeight: "1.4", letterSpacing: "0.08em" },
      ],
      "8-fluid": [
        `min(0.5vw, ${pxRem(8)})`,
        { lineHeight: "1.4", letterSpacing: "0.08em" },
      ],
      "6-fluid": [
        `min(0.375vw, ${pxRem(6)})`,
        { lineHeight: "1.4", letterSpacing: "0.08em" },
      ],
      80: [pxRem(80), { lineHeight: "1.1" }],
      72: [pxRem(72), { lineHeight: "1" }],
      48: [pxRem(48), { lineHeight: "1" }],
      40: [pxRem(40), { lineHeight: "1.2" }],
      32: [pxRem(32), { lineHeight: "1.2" }],
      24: [pxRem(24), { lineHeight: "1.2" }],
      20: [pxRem(20), { lineHeight: "1.2" }],
      18: [pxRem(18), { lineHeight: "1.2" }],
      16: [pxRem(16), { lineHeight: "1.4", letterSpacing: "0.02em" }],
      14: [pxRem(14), { lineHeight: "1.4", letterSpacing: "0.02em" }],
      12: [pxRem(12), { lineHeight: "1.4", letterSpacing: "0.02em" }],
      10: [pxRem(10), { lineHeight: "1.4", letterSpacing: "0.08em" }],
      8: [pxRem(8), { lineHeight: "1.4", letterSpacing: "0.08em" }],
      6: [pxRem(6), { lineHeight: "1.4", letterSpacing: "0.08em" }],
    },
    extend: {
      screens: {
        xs: "480px",
      },
      maxWidth: {
        "8xl": "1400px",
        "9xl": "1600px",
      },
    },
  },
} satisfies Config;
