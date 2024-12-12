<script setup lang="ts">
import type { Article } from '~/types/article'

defineProps<{
  article: Article
}>()
</script>

<template>
  <article
    class="group relative flex w-full flex-col rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
  >
    <ArticleCardHeader :image="article.image" />
    <ArticleCardBody :title="article.title" :created-at="article.publishAt" />
    <ArticleCardFooter :link="article.to" />
  </article>
</template>
