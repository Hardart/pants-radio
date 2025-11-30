// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: { preference: 'light' },
  app: {
    head: {
      script: [{ src: '/js/uikit.min.js', defer: true, fetchpriority: 'high' }],
      title: '«Радио ШТАНЫ». Все только для тебя',
      meta: [
        {
          name: 'description',
          content: 'Слушай Радио ШТАНЫ в прямом эфире онлайн на официальном сайте бесплатно и без регистрации'
        },
        {
          name: 'keywords',
          content:
            'радио, онлайн-радио, интернет-радио, бесплатное радио, радиостанция, музыка, новости, слушать радио, слушать радио онлайн, слушать online радио, Радио, слушать онлайн'
        },
        {
          property: 'og:image:width',
          content: '300'
        },
        {
          property: 'og:image:height',
          content: '300'
        },
        {
          property: 'og:image',
          content: 'https://radioshtani.ru/logo.svg'
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      radioURL: 'https://stream.elarin.ru/rsh_federal'
    }
  },
  modules: ['@pinia/nuxt', '@nuxt/ui', '@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/device', '@morev/vue-transitions/nuxt'],
  pinia: { storesDirs: ['./store/**'] },
  routeRules: {
    '/api/v1/**': {
      proxy: process.env.BASE_URL
    },
    '/api/v2/**': {
      proxy: process.env.ROUTER_V2_URL
    },
    '/privacy': { prerender: true },
    '/information': { prerender: true },
    '/news': { isr: 3600 }
  }
})
