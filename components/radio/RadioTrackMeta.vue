<script setup lang="ts">
defineProps<{
  artistName?: string
  trackTitle?: string
}>()
</script>

<template>
  <div class="scrollbar-hide flex-grow overflow-hidden overflow-x-auto whitespace-nowrap text-neutral-100">
    <h4 class="text-lg font-semibold">{{ artistName }}</h4>
    <p class="text-sm">{{ trackTitle }}</p>
  </div>
</template>

<style></style>
