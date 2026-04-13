<script lang="ts" setup>
import type { Article } from '~/types/article'
import { absoluteUrl } from '~/utils/correctImageSrc'
import { parseHtml } from '~/utils/parseArticle'
const route = useRoute()
const { slug } = route.params
if (!slug || typeof slug !== 'string') throw createError('type of url parameter is not a STRING')

const { data } = await useFetch<Article>(`/api/v1/articles/${slug}`, {
  key: slug,
  getCachedData: (key) => useNuxtApp().payload.data[key]
})
const article = toValue(data)
if (!article) throw createError('Article is not define')
useSeoMeta({
  title: article.title,
  ogImage: absoluteUrl(article.image),
  ogImageWidth: 1200,
  ogImageHeight: 630
})
</script>

<template>
  <HdrtBreadcrumbs :label-list="['новости', article.category.title, article.title]" show-home />
  <Section padding="small">
    <div class="article lg:w-3/4">
      <UiPageTitle class="tracking-tight" :title="article.title" />
      <div class="">
        <div
          class="article__text mb-4 space-y-4 overflow-hidden text-lg leading-6 tracking-normal"
          v-html="parseHtml(article.content)"
        ></div>
        <div class="flex gap-x-4">
          <TagItemList :tags="article.tags" />
        </div>
      </div>
    </div>
  </Section>
</template>

<style>
.article__text img {
  margin: 0 auto;
}
.article__text a {
  color: #f15a24 !important;
  text-decoration: underline;
}

.article__text a:hover {
  text-decoration: none;
}
</style>
