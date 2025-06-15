/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#33C27A",
        "secondary": "#edf2f7"
      }
    },
  },
  plugins: [require('daisyui')],
}