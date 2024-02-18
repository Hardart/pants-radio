<script lang="ts" setup>
const { data: people } = await useFetch('/api/team', { key: 'hosts', getCachedData: key => useNuxtApp().payload.data[key] })
const { data } = await useFetch('/api/news', {
  query: { limit: 4 },
  key: 'latest-news',
  getCachedData: key => useNuxtApp().payload.data[key],
})
</script>

<template>
  <Section padding="small">
    <UkSlideshow />
  </Section>
  <Section padding="small">
    <SectionTitle title="Новинки Радио ШТАНЫ" />
    <TrackList />
  </Section>
  <Section>
    <SectionTitle title="Новости" />
    <NewsLatest :news="data.news" />
  </Section>
  <Section>
    <SectionTitle title="Акции и конкурсы" />
    <PromotionsList />
  </Section>
  <Section padding="top">
    <SectionTitle title="Лица Радиостанции" />
    <TeamList :people="people" />
  </Section>
</template>
