/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A2B49',
        secondary: '#722F37',
        tertiary: '#D4AF37',
        neutral: {
          100: '#FFFFFF',
          200: '#F8F3E9',
          300: '#F5F0E6',
          400: '#F2EDE3',
          900: '#1D1C16',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.05em',
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
