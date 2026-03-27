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
        glass: {
          light: 'rgba(255, 255, 255, 0.08)',
          medium: 'rgba(255, 255, 255, 0.12)',
          heavy: 'rgba(255, 255, 255, 0.18)',
          border: 'rgba(255, 255, 255, 0.15)',
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
      backdropBlur: {
        xs: '4px',
        glass: '16px',
        heavy: '24px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'float-slow': 'float 10s ease-in-out infinite 4s',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'text-reveal': 'textReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'border-flow': 'borderFlow 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(40px) skewY(2deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) skewY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        borderFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-lg': '0 16px 48px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'glass-glow': '0 0 60px rgba(212, 175, 55, 0.15), 0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-inner': 'inset 0 2px 4px rgba(255, 255, 255, 0.06)',
        'neon-gold': '0 0 20px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.1)',
        'neon-wine': '0 0 20px rgba(114, 47, 55, 0.3), 0 0 60px rgba(114, 47, 55, 0.1)',
      },
    },
  },
  plugins: [],
};
