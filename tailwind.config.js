/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
        english: ['Playfair Display', 'serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#D4A847',
          light: '#F0C96B',
          dark: '#A07A20',
        },
      },
    },
  },
  plugins: [],
};
