/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inria': ['"Inria Sans"', 'sans-serif'],
        'noto': ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
