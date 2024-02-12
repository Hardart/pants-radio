// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/device', '@morev/vue-transitions/nuxt'],
  pinia: {
    storesDirs: ['./store/**'],
  },
})

// routeRules: {
//   '/api/**': {
//     proxy: process.env.BASE_URL,
//   },
// },
