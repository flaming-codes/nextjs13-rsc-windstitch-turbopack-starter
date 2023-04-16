const defaultTheme = require("tailwindcss/defaultTheme");
const wildConfig = require("./tailwind.config.wild.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("windy-radix-palette"), require("@tailwindcss/typography"), require("windy-radix-typography")],
  presets: [wildConfig.preset],
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
      "120-fluid": [`min(7.5vw, ${wildConfig.utils.pxRem(120)})`, { lineHeight: 1.1 }],
      80: [wildConfig.utils.pxRem(80), { lineHeight: 1.1 }],
      72: [wildConfig.utils.pxRem(72), { lineHeight: 1 }],
      48: [wildConfig.utils.pxRem(48), { lineHeight: 1 }],
      40: [wildConfig.utils.pxRem(40), { lineHeight: 1.2 }],
      32: [wildConfig.utils.pxRem(32), { lineHeight: 1.2 }],
      24: [wildConfig.utils.pxRem(24), { lineHeight: 1.2 }],
      20: [wildConfig.utils.pxRem(20), { lineHeight: 1.2 }],
      18: [wildConfig.utils.pxRem(18), { lineHeight: 1.2 }],
      16: [wildConfig.utils.pxRem(16), { lineHeight: 1.4, letterSpacing: "0.02em" }],
      14: [wildConfig.utils.pxRem(14), { lineHeight: 1.4, letterSpacing: "0.02em" }],
      12: [wildConfig.utils.pxRem(12), { lineHeight: 1.4, letterSpacing: "0.02em" }],
      10: [wildConfig.utils.pxRem(10), { lineHeight: 1.4, letterSpacing: "0.08em" }],
    },
    extend: {
      screens: {
        xs: "480px",
      },
    },
  },
};
