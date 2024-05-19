<script lang="ts" setup>
import type { API } from '~/types/api'

const { data } = await useFetch<API.MainPage>('/api/v1/base', {
  query: { limit: 4 },
  key: 'base-data',
  getCachedData: (key) => useNuxtApp().payload.data[key]
})
if (!data.value) throw createError("Can't fetch data")
provide('articles', data.value.articles)
provide('hosts', data.value.hosts)
provide('gallery', data.value.slides)
// useHead({
//   script: [{ src: '/js/slideshow.min.js', tagPosition: 'bodyClose', defer: true, processTemplateParams: process.client }],
// })
</script>

<template>
  <SectionsMainSlideshow />
  <SectionsMainLastNews />
  <LazySectionsMainHosts />
  <!-- NEED PROVIDE TRACKS -->
  <!-- <SectionsMainLastTracks/>  -->
  <!-- <Section>
    <SectionTitle title="Акции и конкурсы" />
    <PromotionsList />
  </Section> -->
</template>
