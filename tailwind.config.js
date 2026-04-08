/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.vue',
    './app.vue',
    './app.config.ts'
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#07070c',
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a26',
          600: '#242435'
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#a855f7',
          pink: '#ec4899'
        },
        ink: {
          DEFAULT: '#e5e7eb',
          dim: '#9ca3af',
          faint: '#6b7280'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #22d3ee 0%, #a855f7 50%, #ec4899 100%)'
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'blob-float': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' }
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        }
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'blob-float': 'blob-float 18s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite'
      }
    }
  }
};
