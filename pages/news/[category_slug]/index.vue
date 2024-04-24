<script lang="ts" setup>
import type { Category } from '~/types/article';

const route = useRoute()
const slug = route.params['category_slug'] as string
if (!slug || typeof slug !== 'string') throw createError('type of url parameter is not a STRING')

const { data } = await useFetch<Category>(`/api/v1/categories/${slug}`, {
  key: slug,
  getCachedData: key => useNuxtApp().payload.data[key],
})
const category = toValue(data)
if (!category) throw createError('Article is not define')


</script>

<template>
  <HdrtBreadcrumbs :label-list="['новости', category.title]" show-home/>
  <Section padding="small">
    <UiPageTitle :title="category.title" />
    <ArticleCardList :articles="category.articles"/>
  </Section>
</template>

<style scoped></style>
