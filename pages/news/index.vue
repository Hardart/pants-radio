<script lang="ts" setup>
import type { Tag } from '~/types/article'
const route = useRoute()
const { page, tag, query, getNewsQuery } = useQueryParams()

const { data: tags } = await useFetch<Tag[]>('/api/tags')
const { data: newsData } = useAsyncData(
  () => {
    page.value = Number(route.query.page) || 1
    return $fetch('/api/news', { query: route.query })
  },
  { watch: [() => route.query] }
)
const perPage = 4
</script>

<template>
  <Section padding-bottom-remove>
    <UiPageTitle title="Новости" />
    <TagList :tags="tags" />
    <NewsAll v-if="newsData" :news="newsData.news" />

    <HdrtPaginationS v-if="newsData" v-model:page.number="page" :per-page="perPage" :total="newsData.total" />
  </Section>
</template>

<style scoped></style>
