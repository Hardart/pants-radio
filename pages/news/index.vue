<script lang="ts" setup>
import type { Tag } from '~/types/article'
const { page, tag, query, getNewsQuery } = useQueryParams()

const { data } = useAsyncData(
  () => {
    getNewsQuery()
    return $fetch('/api/news', { query: query.value })
  },
  { watch: [page, tag] }
)
const { data: tags } = await useFetch<Tag[]>('/api/tags')

const perPage = 4
</script>

<template>
  <Section padding-bottom-remove>
    <UiPageTitle title="Новости" />
    <TagList :tags="tags" />
    <NewsAll v-if="data" :news="data.news" />
    <HdrtPagination v-if="data" v-model:page.number="page" :total="data.total" :per-page="perPage" />
  </Section>
</template>

<style scoped></style>
