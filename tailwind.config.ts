import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-blue": "#a8d5ff",
        "accent-lavender": "#c4b5fd",
        "accent-mint": "#a7f3d0",
        "accent-peach": "#fecaca",
        "accent-yellow": "#fef08a",
      },
    },
  },
  plugins: [],
};
export default config;
