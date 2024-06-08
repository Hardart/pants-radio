<script lang="ts" setup>
import type { API } from '~/types/api'

const { data } = await useFetch<API.MainPage>('/api/v1/base', {
  query: { limit: 4 },
  key: 'base-data',
  getCachedData: (key) => useNuxtApp().payload.data[key]
})
const res = toValue(data)
if (!res) throw createError("Can't fetch data")
provide('articles', res.articles)
provide('hosts', res.hosts)
provide('gallery', res.slides)
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
