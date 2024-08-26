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
      fontFamily: {
        title: ['var(--font-abril-titling)'],
        body: ['var(--font-komet)'],
      },
    },
  },
  plugins: [
    aspectRatio,
  ],
};
export default config;
