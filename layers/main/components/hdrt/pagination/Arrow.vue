<script setup lang="ts">
const { setQuery } = useQueryParams()
defineProps<{
  pageNumber: number
  type: 'next' | 'prev'
  isDisableLink: boolean
}>()
</script>

<template>
  <NuxtLink
    class="pagination"
    :class="isDisableLink && 'disable'"
    :to="!isDisableLink ? { path: $route.fullPath, query: setQuery(pageNumber) } : undefined"
  >
    <Icon :class="type === 'next' && 'rotate-180'" name="material-symbols:arrow-left-alt-rounded" />
  </NuxtLink>
</template>
