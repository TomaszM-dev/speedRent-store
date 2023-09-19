import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "15px",
        },
      },
      screens: {
        sm: "640px",
        md: "760px",
        lg: "1024px",
        xl: "1300px",
      },
      colors: {
        primary: "#101828",
        secondary: "#667085",
        accent: {
          DEFAULT: "#ed1d24",
          hover: "#dd242a",
        },
        body: "#dedede",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
