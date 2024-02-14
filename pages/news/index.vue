<script lang="ts" setup>
import type { Tag, NewsData } from '~/types/article'
const route = useRoute()
const { page } = useQueryParams(route)
const { newsData } = useNews()
const { data: tags } = await useFetch<Tag[]>('/api/tags')
await getNewsList()
watch(() => route.query, getNewsList)
const perPage = 4
async function getNewsList() {
  const data = await useFetchWithCache<NewsData>('/api/news', route.query)
  newsData.value = data.value
  page.value = Number(route.query.page) || 1
}
</script>

<template>
  <Section padding="top">
    <UiPageTitle title="Новости" />
    <TagList :tags="tags" />
    <NewsAll v-if="newsData" :news="newsData.news" />

    <HdrtPaginationS v-if="newsData" v-model:page.number="page" :per-page="perPage" :total="newsData.total" />
  </Section>
</template>

<style scoped></style>
