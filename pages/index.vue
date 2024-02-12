<script lang="ts" setup>
const { data: people } = await useFetch('/api/team', { key: 'hosts', getCachedData: key => useNuxtApp().payload.data[key] })
</script>

<template>
  <Section padding="none"> </Section>
  <Section padding="small">
    <SectionTitle title="Новинки Радио ШТАНЫ" />
    <TrackList />
  </Section>
  <Section>
    <SectionTitle title="Новости" />
    <NewsLatest />
  </Section>
  <Section>
    <SectionTitle title="Акции и конкурсы" />
    <PromotionsList />
  </Section>
  <Section padding-bottom-remove>
    <SectionTitle title="Лица Радиостанции" />
    <TeamList :people="people" />
  </Section>
</template>
