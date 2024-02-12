<script lang="ts" setup>
import type { Article } from '~/types/article'

const route = useRoute()
const { newsSlug } = route.params
if (!newsSlug || typeof newsSlug !== 'string') throw createError('type of url parameter is not a STRING')
// const { findOneBySlug } = useFetchProducts()

// const { data: article } = await findOneBySlug(newsSlug)
const { data: article } = await useFetch<Article>('/api/article', {
  key: newsSlug,
  method: 'post',
  body: { slug: newsSlug },
  getCachedData: key => useNuxtApp().payload.data[key],
})
</script>

<template>
  <NewsBreadcrumbs v-if="article" :article="article" is-show-home-path />
  <Section padding="small" v-if="article">
    <div class="lg:w-3/4">
      <UiPageTitle class="tracking-tight" :title="article.title" />
      <div>
        <div class="text-lg tracking-normal" v-html="article.text"></div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
