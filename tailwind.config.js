/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        d: '#fcd34d',
        v: '#1F2F1A',
        b: '#F8F9FA',
        font: '#000000',
      },
      fontFamily: {
        font1: ['Abhaya Libre', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
