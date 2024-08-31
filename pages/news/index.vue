<script lang="ts" setup>
import type { API } from '~/types/api'
import { STATE } from '@/types/state-enum'
const { page, tags } = useQueryParams()
const { tagList } = useMeta()
const total = useState(STATE.TOTAL_NEWS, () => 0)

const limit = ref(4)

const { data } = await useFetch<API.NewsPage>('/api/v1/articles', {
  query: { page, limit, tags },
  key: `${page.value}-${limit.value}-${tags.value}`,
  getCachedData: (key) => useNuxtApp().payload.data[key],
  onResponse({ response }) {
    const articlesCount = response.headers.get('X-Total')
    total.value = articlesCount ? parseInt(articlesCount) : 0
  }
})
console.log(`${page.value}-${limit.value}-${tags.value}`)
</script>

<template>
  <Section padding="top">
    <UiPageTitle title="Новости" />

    <ul class="mb-6 flex flex-wrap gap-2" v-if="data?.categories">
      <li
        class="whitespace-nowrap rounded-md border border-primary px-3 max-md:text-xs md:rounded-xl md:py-1"
        v-for="category in data.categories"
      >
        <NuxtLink :to="`/news/${category.slug}`">{{ category.title }}</NuxtLink>
      </li>
    </ul>
    <TagItemList v-if="tagList" :tags="tagList" />
    <ArticleCardList v-if="data?.articles" :articles="data.articles" />
    <HdrtPaginationS v-model:page.number="page" :per-page="limit" :total="total" />
  </Section>
</template>
