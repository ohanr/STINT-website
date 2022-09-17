/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light_blue': '#e2edf1',
        'mid_blue': '#76b9f0',
        'dark_blue': '#1f628c',
      },
    },
  },
  plugins: [],
}
