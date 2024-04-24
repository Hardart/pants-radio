<script lang="ts" setup>
const { data } = await useFetch('/api/v1/base', {
  query: { limit: 4 },
  key: 'base-data',
  getCachedData: key => useNuxtApp().payload.data[key],
})
provide('articles', data.value.articles)
provide('hosts', data.value.hosts)
// useHead({
//   script: [{ src: '/js/slideshow.min.js', tagPosition: 'bodyClose', defer: true, processTemplateParams: process.client }],
// })
</script>

<template>
  <SectionsMainSlideshow />
  <SectionsMainLastNews/>
  <LazySectionsMainHosts/>
  <!-- NEED PROVIDE TRACKS -->
  <!-- <SectionsMainLastTracks/>  -->  
  <!-- <Section>
    <SectionTitle title="Акции и конкурсы" />
    <PromotionsList />
  </Section> -->
</template>
