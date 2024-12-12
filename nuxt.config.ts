// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: 'light'
  },
  app: {
    head: {
      script: [{ src: '/js/uikit.min.js', defer: true, fetchpriority: 'high' }],
      title: '«Радио ШТАНЫ». Все только для тебя',
      // link: [{ href: 'http://hardart.site/images/gallery/317d6ff8308d78a3_75.webp', rel: 'preload', as: 'image' }],
      meta: [
        {
          name: 'description',
          content: 'Слушай Радио ШТАНЫ в прямом эфире онлайн на официальном сайте бесплатно и без регистрации'
        },
        {
          name: 'keywords',
          content:
            'радио, онлайн-радио, интернет-радио, бесплатное радио, радиостанция, музыка, новости, слушать радио, слушать радио онлайн, слушать online радио, Радио, слушать онлайн'
        }
      ]
    }
  },
  modules: ['@pinia/nuxt', '@nuxt/ui', '@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/device', '@morev/vue-transitions/nuxt'],
  pinia: {
    storesDirs: ['./store/**']
  },
  routeRules: {
    '/api/v1/**': {
      proxy: process.env.BASE_URL
    },
    '/privacy': { prerender: true },
    '/information': { prerender: true },
    '/news': { isr: 3600 }
  }
})
