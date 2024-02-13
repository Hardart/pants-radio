<script setup lang="ts">
import type { LocationQuery } from 'vue-router'
defineProps<{
  pageNumber: number
  type: 'next' | 'prev'
  isDisableLink: boolean
}>()

const removedPage = (queryFromUrl: LocationQuery) => {
  const query = { ...queryFromUrl }
  delete query.page
  return query
}
</script>

<template>
  <NuxtLink
    class="pagination"
    :class="isDisableLink && 'disable'"
    :to="
      !isDisableLink
        ? { path: $route.fullPath, query: pageNumber === 1 ? removedPage($route.query) : { ...$route.query, page: pageNumber } }
        : undefined
    "
  >
    <Icon :class="type === 'next' && 'rotate-180'" name="material-symbols:arrow-left-alt-rounded" />
  </NuxtLink>
</template>
