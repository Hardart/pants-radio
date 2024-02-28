<script lang="ts" setup>
import { useNewsStore } from '~/store/useNewsStore'
const { fetchNews, storeRefs } = useNewsStore()
const { news, perPage, total, page } = storeRefs()
await fetchNews()
</script>

<template>
  <Section padding="top">
    <UiPageTitle title="Новости" />
    <!-- <TagList :tags="tags" /> -->
    <NewsAll v-if="news" :news="news" />
    <HdrtPaginationS v-if="news" v-model:page.number="page" :per-page="perPage" :total="total" />
  </Section>
</template>

<style scoped></style>
