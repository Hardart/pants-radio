<script lang="ts" setup>
import { STATE } from '@/types/state-enum'
const { page,tags } = useQueryParams()
const { tagList } = useMeta()
const total = useState(STATE.TOTAL_NEWS, () => 0)

const limit = ref(4)
const {data: newsList} = await useFetch<ICard[]>('/api/v1/articles', { query: { page, limit, tags }, onResponse({response}){
  const articlesCount = response.headers.get('X-Total')
  total.value = articlesCount ? parseInt(articlesCount) : 0
}})


</script>

<template>
  <Section padding="top">
    <UiPageTitle title="Новости" />
    <TagList v-if="tagList" :tags="tagList" />
    <ArticleList v-if="newsList" :articles="newsList" />
    <HdrtPaginationS v-model:page.number="page" :per-page="limit" :total="total" />
  </Section>
</template>
