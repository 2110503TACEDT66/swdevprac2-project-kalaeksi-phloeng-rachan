/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "gray-darker": "#303841",
        "gray-lighter": "#3A4750",
        "gray-blueish": "#203541",
        "yellow-sour": "#FFD933",
        "pink-sweet": "#F62A66"
      }
    },
  },
  plugins: [],
}

