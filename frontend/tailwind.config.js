/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B396A', //azul
        secondary: {
          100: '#807E82',
        },
      },
    },
  },
  plugins: [],
}