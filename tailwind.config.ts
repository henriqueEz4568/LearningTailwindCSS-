import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors:{
        h:"#2594c7"
      }
    },
  },
  plugins: [],
};
export default config;
