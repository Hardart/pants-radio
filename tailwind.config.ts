import type { Config } from 'tailwindcss'
export default {
  content: ['./pages/**/*.vue', './components/**/*.vue', './app.vue'],
  theme: {
    extend: {
      colors: {
        primary: '#f15a24',
        secondary: '#1a1a1a',
        neutral: {
          simple: '#fafbfc',
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config
