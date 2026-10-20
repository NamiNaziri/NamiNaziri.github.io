/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          950: '#0b0c10',
          900: '#101218',
          800: '#14151c',
          700: '#1c1e28',
          600: '#262935',
          500: '#383c4a',
        },
        ink: {
          100: '#eef0f5',
          300: '#a8adba',
          500: '#6e7386',
        },
        accent: {
          DEFAULT: '#ffffff',
          dim: '#a8adba',
          soft: 'rgba(255, 255, 255, 0.14)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        panel: '0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
