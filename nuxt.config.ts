// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: 'light',
  },
  app: {
    head: {
      title: '«Радио ШТАНЫ». Все только для тебя',
      meta: [
        { name: 'description', content: 'Слушай Радио ШТАНЫ в прямом эфире онлайн на официальном сайте бесплатно и без регистрации' },
        {
          name: 'keywords',
          content:
            'радио, онлайн-радио, интернет-радио, бесплатное радио, радиостанция, музыка, новости, слушать радио, слушать радио онлайн, слушать online радио, Радио, слушать онлайн',
        },
      ],
      script: [{ src: '/js/uikit.min.js', defer: true }],
    },
  },
  modules: ['@pinia/nuxt', '@nuxt/ui', '@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/device', '@morev/vue-transitions/nuxt'],
  pinia: {
    storesDirs: ['./store/**'],
  },
})

// routeRules: {
//   '/api/**': {
//     proxy: process.env.BASE_URL,
//   },
// },

// delayHydration: {
//   // enables nuxt-delay-hydration in dev mode for testing
//   // NOTE: you should disable this once you've finished testing, it will break HMR
//   debug: process.env.NODE_ENV === 'development',
//   // debug: false,
//   mode: 'init',
//   idleCallbackTimeout: 10000,
// },
