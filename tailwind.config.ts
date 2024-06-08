import type { Config } from 'tailwindcss'
export default {
  content: ['./pages/**/*.vue', './components/**/*.vue', './app.vue'],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#f15a24',
          100: '#f15a24',
          200: '#f15a24',
          300: '#f15a24',
          400: '#f15a24',
          500: '#f15a24',
          600: '#f15a24',
          700: '#f15a24',
          800: '#f15a24',
          900: '#f15a24',
          950: '#f15a24'
        },
        primary: '#f15a24',
        primary_rgb: '241, 90, 36',
        secondary: '#1a1a1a',
        neutral: {
          simple: '#fafbfc'
        }
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: []
} satisfies Config
