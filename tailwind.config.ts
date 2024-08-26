import type { Config } from "tailwindcss";
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '1/1': [1, 1].toString(),
        '16/9': [16, 9].toString(),
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
};
export default config;
