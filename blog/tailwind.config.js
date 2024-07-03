/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#002554',
        'light-blue': '#66d8f5'
      }
    }
  },
  plugins: [],

}