import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DA2311",
        "primary-light": "#FF1700",
        secondary: "#2B717F",
        background: "#191919",
        "background-light": "#202020",
        light: "#EFEFEF",
      },
    },
  },
  plugins: [],
};
export default config;
