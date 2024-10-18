<script lang="ts" setup>
import type { Category } from '~/types/article'

defineProps<{
  category: Category
}>()
</script>

<template>
  <li class="whitespace-nowrap rounded-md border border-primary px-3 max-md:text-xs md:rounded-xl md:py-1">
    <NuxtLink :to="`/news/${category.slug}`">{{ category.title }}</NuxtLink>
  </li>
</template>
