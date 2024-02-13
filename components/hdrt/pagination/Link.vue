<script setup lang="ts">
import type { LocationQuery } from 'vue-router'
defineProps<{
  isActive?: boolean
  isDisabled?: boolean
  pageNumber?: string | number
  type?: 'next' | 'prev'
}>()
defineEmits(['update:page'])

const removedPage = (queryFromUrl: LocationQuery) => {
  const query = { ...queryFromUrl }
  delete query.page
  return query
}
</script>

<template>
  <NuxtLink
    class="pagination"
    :class="isDisabled && 'disable'"
    v-if="type === 'next' || type === 'prev'"
    :to="{ path: $route.fullPath, query: pageNumber === 1 ? removedPage($route.query) : { ...$route.query, page: pageNumber } }"
  >
    <Icon
      v-if="type === 'prev' || type === 'next'"
      :class="type === 'next' && 'rotate-180'"
      name="material-symbols:arrow-left-alt-rounded"
    />
  </NuxtLink>

  <NuxtLink
    v-else
    class="pagination"
    :class="[isActive && 'active']"
    :to="{ path: $route.fullPath, query: pageNumber === 1 ? removedPage($route.query) : { ...$route.query, page: pageNumber } }"
  >
    <span v-if="pageNumber">{{ pageNumber }}</span>
  </NuxtLink>
</template>

<style>
.pagination {
  @apply flex items-center justify-center w-12 h-12 rounded border hover:bg-primary hover:text-white;
}

.pagination.disable {
  @apply text-neutral-500 hover:bg-transparent hover:text-neutral-500 cursor-default;
}

.pagination.active {
  @apply bg-primary/75 text-white cursor-default;
}
</style>
