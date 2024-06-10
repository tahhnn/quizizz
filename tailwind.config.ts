import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
      extend: {
        textColor: {
          lightGray: "#F1EFEE",
          primary: "#FAFAFA",
          secColor: "#efefef",
          navColor: "#BEBEBE",
        },
        color: {
          "lightPurple": "var(--lightPurple)",
          "higherPurple": "var(--higherPurple)",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
  },
  plugins: [],
};
export default config;
