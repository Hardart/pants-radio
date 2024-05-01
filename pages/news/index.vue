<script lang="ts" setup>
import type { API } from '~/types/api';
import { STATE } from '@/types/state-enum'
const { page, tags } = useQueryParams()
const { tagList } = useMeta()
const total = useState(STATE.TOTAL_NEWS, () => 0)

const limit = ref(4)
const { data } = await useFetch<API.NewsPage>('/api/v1/articles', 
  { query: { page, limit, tags },
  onResponse({response}){
    const articlesCount = response.headers.get('X-Total')
    total.value = articlesCount ? parseInt(articlesCount) : 0
  }}
)


</script>

<template>
  <Section padding="top">
    <UiPageTitle title="Новости" />
    
    <ul class="flex gap-4 mb-4" v-if="data?.categories">
      <li class="px-3 pt-0.5 pb-1 border border-primary rounded-xl" v-for="category in data.categories">
        <NuxtLink :to="`/news/${category.slug}`">{{ category.title }}</NuxtLink>
      </li>
    </ul>
    <TagItemList v-if="tagList" :tags="tagList" />
    <ArticleCardList v-if="data?.articles" :articles="data.articles" />
    <HdrtPaginationS v-model:page.number="page" :per-page="limit" :total="total" />
  </Section>
</template>
