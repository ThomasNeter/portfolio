/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#FFFFFF', // Set your light mode primary color
          // Add more light mode colors as needed
        },
      },
    },
  },
  plugins: [],
  darkMode: 'false',
}