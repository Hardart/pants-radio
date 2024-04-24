<script setup lang="ts">
import type { Article } from '~/types/article';

defineProps<{
  article: Article
}>()

</script>

<template>

  <article class="relative flex flex-col w-full group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
    <ArticleCardHeader :image="article.image" />
    <ArticleCardBody :title="article.title" :created-at="article.createdAt"/>
    
    <!-- CARD FOOTER -->
    <div class="absolute inset-0">
      <NuxtLink class="absolute inset-0" :to="`/news${article.to}`" />
    </div>
  </article>
</template>
