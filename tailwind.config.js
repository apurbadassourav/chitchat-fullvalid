/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'num': ['Nunito', 'sans-serif'],
        'san': ['Open Sans', 'sans-serif']
    },
    },
  },
  plugins: [],
}