/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        base: 'var(--color-base)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        border: 'var(--color-border)',
        'card-bg': 'var(--color-card-bg)',
      },
      borderColor: {
        DEFAULT: 'var(--color-border)',
      },
      textColor: {
        DEFAULT: 'var(--color-text)',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        retro: ['"VT323"', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'typewriter': 'typewriter 2s steps(40) forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          '50%': { boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(0,0,0,0.3)',
        'retro-lg': '6px 6px 0px 0px rgba(0,0,0,0.3)',
        'inner-retro': 'inset 2px 2px 4px rgba(0,0,0,0.2)',
        'glow-primary': '0 0 10px var(--color-primary), 0 0 20px var(--color-primary)',
        'glow-accent': '0 0 10px var(--color-accent), 0 0 20px var(--color-accent)',
      },
      screens: {
        'xs': '360px',
      },
    },
  },
  plugins: [],
}
