<script setup lang="ts">
import type { Article } from '~/types/article'
defineProps<{ articles: Article[] }>()
</script>

<template>
  <div class="grid grid-cols-1 gap-6 px-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
    <ArticleCard v-for="article in articles" :article />
  </div>
</template>

<style></style>
