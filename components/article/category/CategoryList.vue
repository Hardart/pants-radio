<script lang="ts" setup>
import type { Category } from '~/types/article'

defineProps<{
  categories: Category[]
}>()
</script>

<template>
  <ul class="mb-6 flex flex-wrap gap-2">
    <ArticleCategoryItem v-for="category in categories" :category />
  </ul>
</template>
