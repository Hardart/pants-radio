<script lang="ts" setup>
import type { Category } from '~/types/article'

const route = useRoute()
const slug = route.params['category_slug'] as string
if (!slug || typeof slug !== 'string') throw createError('type of url parameter is not a STRING')

const { data, pending } = await useFetch<Category>(`/api/v1/categories/${slug}`, {
  key: slug,
  getCachedData: (key) => useNuxtApp().payload.data[key]
})
</script>

<template>
  <HdrtBreadcrumbs v-if="data" :label-list="['новости', data.title]" show-home />
  <Section padding="small">
    <UiPageTitle v-if="data" :title="data.title" />
    <ArticleCardSkeletonCardList v-if="pending" />
    <ArticleCardList v-else-if="data" :articles="data.articles" />
  </Section>
</template>

<style scoped></style>
