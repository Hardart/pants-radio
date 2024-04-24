<script setup lang="ts">
import type { Article } from '~/types/article'
defineProps<{ articles: Article[] }>()
</script>

<template>
  <div class="grid grid-cols-1 px-5 sm:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-4">
    <ArticleCard v-for="article in articles" :article />
  </div>
</template>

<style></style>
