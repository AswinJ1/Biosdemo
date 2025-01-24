/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'], // Add Roboto as the default sans-serif font
        roboto: ['Roboto', 'sans-serif'], // Custom utility class for Roboto
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--mouse-x), var(--mouse-y))',
      },
      animation: {
        'borderColorAnimation': 'borderColorAnimation 3s infinite',
      },
      keyframes: {
        borderColorAnimation: {
          '0%': { borderColor: 'red' },
          '33%': { borderColor: 'green' },
          '66%': { borderColor: 'blue' },
          '75%': { borderColor: 'yellow' },
          '100%': { borderColor: 'red' },
        },
      },
      
    },
  },
  darkMode: 'class', 
  plugins: [ require('@tailwindcss/forms'),
  ],

}

