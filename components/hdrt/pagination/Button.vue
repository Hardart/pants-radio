<script setup lang="ts">
defineProps<{
  isActive?: boolean
  isDisabled?: boolean
  text?: string | number
  type?: 'next' | 'prev'
}>()
</script>

<template>
  <button class="pagination" :class="isActive && 'active'" :disabled="isDisabled">
    <Icon
      v-if="type === 'prev' || type === 'next'"
      :class="type === 'next' && 'rotate-180'"
      name="material-symbols:arrow-left-alt-rounded"
    />

    <span v-if="text">{{ text }}</span>
  </button>
</template>

<style>
.pagination {
  @apply flex h-12 w-12 items-center justify-center rounded border hover:bg-primary hover:text-white disabled:text-neutral-500 disabled:hover:bg-transparent disabled:hover:text-neutral-500;
}

.pagination.active {
  @apply cursor-default bg-primary/75 text-white;
}
</style>
