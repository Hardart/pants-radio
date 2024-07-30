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
  @apply flex h-12 w-12 items-center justify-center rounded border hover:bg-primary/75 hover:text-white active:bg-primary;
}

.pagination.disable {
  @apply cursor-default  text-neutral-400 hover:bg-transparent hover:text-neutral-400;
}

.pagination.active {
  @apply cursor-default bg-primary font-medium text-white;
}

.pagination__empty {
  @apply flex cursor-default items-end px-2 py-1;
}
</style>
