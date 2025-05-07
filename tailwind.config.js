/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "myColor": "#0C4A6E"
      }
    },
  },
  plugins: [require('daisyui')],
}