<script lang="ts" setup>
import TrackList from './_sections/LatestTrack.vue'
import Slideshow from './_sections/Slideshow.vue'

const { data } = await useFetch('/api/main', {
  query: { limit: 4 },
  key: 'main-page',
  getCachedData: key => useNuxtApp().payload.data[key],
})

// useHead({
//   script: [{ src: '/js/slideshow.min.js', tagPosition: 'bodyClose', defer: true, processTemplateParams: process.client }],
// })
</script>

<template>
  <Slideshow />
  <TrackList :limit="10" title="Новинки Радио ШТАНЫ" />
  <Section>
    <SectionTitle title="Новости" />
    <NewsLatest v-if="data.news" :news="data.news" />
  </Section>
  <Section>
    <SectionTitle title="Акции и конкурсы" />
    <PromotionsList />
  </Section>
  <Section padding="top">
    <SectionTitle title="Лица Радиостанции" />
    <TeamList :people="data.hosts" />
  </Section>
</template>
