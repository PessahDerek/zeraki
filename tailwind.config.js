/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          DEFAULT: '#2EA5DE',
          50: '#CDE9F7',
          100: '#BBE2F4',
          200: '#98D3EF',
          300: '#74C3E9',
          400: '#51B4E4',
          500: '#2EA5DE',
          600: '#1D85B7',
          700: '#156287',
          800: '#0E3F56',
          900: '#061B26',
          950: '#020A0D'
        },
        'green': {
          DEFAULT: '#43AB49',
          50: '#BFE6C2',
          100: '#B1E0B4',
          200: '#94D597',
          300: '#76C97B',
          400: '#59BE5F',
          500: '#43AB49',
          600: '#338338',
          700: '#235A27',
          800: '#143215',
          900: '#040A04',
          950: '#000000'
        },
      }
    },
  },
  plugins: [],
}

