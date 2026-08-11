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
          DEFAULT: '#6d6bff',
          dim: '#514fd1',
          soft: 'rgba(109, 107, 255, 0.14)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        panel: '0 0 0 1px rgba(109,107,255,0.10), 0 20px 60px -20px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
