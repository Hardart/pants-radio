<script lang="ts" setup>
const route = useRoute()
const { page, tag } = useQueryParams(route)
const { fetchNews, fetchPageData, storeRefs } = useNewsStore()
const { news, perPage, total, tags } = storeRefs()
await fetchPageData(route.query, page)
watch(
  () => route.query,
  async () => {
    fetchNews(route.query, page)
  }
)
</script>

<template>
  <Section padding="top">
    <UiPageTitle title="Новости" />
    <TagList v-if="tags" :tags="tags" />
    <NewsAll v-if="news" :news="news" />
    <HdrtPaginationS v-if="news" v-model:page.number="page" :per-page="perPage" :total="total" />
  </Section>
</template>

<style scoped></style>
