<script lang="ts" setup>
const { page, tags } = useQueryParams()
const { tagList } = useMeta()
const newsStore = useNewsStore()
const { limit, total } = storeToRefs(newsStore)
const { data, pending } = useLazyAsyncData('news', () => newsStore.fetchNews(page, tags), { watch: [page, tags] })
</script>

<template>
  <Section padding="top">
    <UiPageTitle title="Новости" />
    <ArticleCategoryList v-if="data?.categories" :categories="data.categories" />
    <TagItemList v-if="tagList" :tags="tagList" />
    <ArticleCardSkeletonCardList v-if="pending" />
    <ArticleCardList v-else-if="data?.articles" :articles="data.articles" />
    <HdrtPaginationS v-model:page.number="page" :per-page="limit" :total />
  </Section>
</template>
