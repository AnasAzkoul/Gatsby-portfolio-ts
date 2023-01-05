/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          '100': "#d2d2d2",
          '200': "#a5a5a5",
          '300': "#777777",
          '400': "#4a4a4a",
          '500': "#1d1d1d",
          '600': "#171717",
          '700': "#111111",
          '800': "#0c0c0c",
          '900': "#060606"
        },
        'secondary': {
          '100': "#fde9cc",
          '200': "#fad399",
          '300': "#f8be66",
          '400': "#f5a833",
          '500': "#f39200",
          '600': "#c27500",
          '700': "#925800",
          '800': "#613a00",
          '900': "#311d00"
        }, 
      }, 
      fontFamily: {
        'links': ["Fira Code", "Fira Mono", "Roboto Mono", "monospace"]
      }, 
      fontSize: {
        'links': 'clamp(14px, 4vw, 18px)'
      }
    },
  },
  plugins: [],
};
