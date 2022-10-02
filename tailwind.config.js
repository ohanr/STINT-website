/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'light_blue': '#e2edf1',
        'mid_blue': '#76b9f0',
        'dark_blue': '#1f628c',
        'circle_blue': '#C9DFE7',
        'outer_circle_blue': '#C8E1EA',
        'outer_outer_circle_blue': "#75BED9",
        'gray': '#E4E4E4'
      },
    fontFamily: {
      'lexend': ['Lexend', 'sans-serif']
    },
    keyframes: {
      bounceSlow:{
        '0%':   { transform: 'translateY(0)'},
        '25%':  { transform: 'translateY(-5px)'},
        '50%': { transform: 'translateY(0)'},
        '75%': { transform: 'translateY(8px)'},
        '100%': { transform: 'translateY(0)'}
      }
    },
    animation:{
      'bounce-slow': 'bounceSlow 3s linear infinite'
    }
  },
  },
  plugins: [require('flowbite/plugin'),
  require('tw-elements/dist/plugin')]
}
