<script setup lang="ts">
const { setQuery } = useQueryParams()
defineProps<{
  isActive?: boolean
  isDisabled?: boolean
  pageNumber: number
}>()
</script>

<template>
  <NuxtLink class="pagination" :class="[isActive && 'active']" :to="{ path: $route.fullPath, query: setQuery(pageNumber) }">
    <span v-if="pageNumber">{{ pageNumber }}</span>
  </NuxtLink>
</template>

<style>
.pagination {
  @apply flex items-center justify-center w-12 h-12 rounded border hover:bg-primary/75 hover:text-white active:bg-primary;
}

.pagination.disable {
  @apply text-neutral-400  hover:bg-transparent hover:text-neutral-400 cursor-default;
}

.pagination.active {
  @apply bg-primary text-white font-medium cursor-default;
}

.pagination__empty {
  @apply flex items-end px-2 py-1 cursor-default;
}
</style>
