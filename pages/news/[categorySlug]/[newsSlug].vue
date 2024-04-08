<script lang="ts" setup>
import type { Article } from '~/types/article'
import { parseHtml } from '~/utils/parseArticle'

const route = useRoute()
const { newsSlug } = route.params
if (!newsSlug || typeof newsSlug !== 'string') throw createError('type of url parameter is not a STRING')

const { data: article } = await useFetch<Article>(`/api/v1/articles/${newsSlug}`, {
  key: newsSlug,
  getCachedData: key => useNuxtApp().payload.data[key],
})

</script>

<template>
  <ArticleBreadcrumbs v-if="article" type="новость" :article="article" show-home-path />

  <Section padding="small" v-if="article">
    <div class="lg:w-3/4">
      <UiPageTitle class="tracking-tight" :title="article.title" />
      <div>
        <div class="text-lg tracking-normal leading-6 overflow-hidden space-y-4 mb-4" v-html="parseHtml(article.content)"></div>
        <div class="flex gap-x-4">
          <TagList :tags="article.tags" />
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped>
.content p > img {
  margin: 0 auto;
}
</style>
