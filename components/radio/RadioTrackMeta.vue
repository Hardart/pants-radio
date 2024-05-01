<script setup lang="ts">
defineProps<{
  artistName?: string
  trackTitle?: string
}>()
</script>

<template>
  <div class="text-neutral-100 whitespace-nowrap overflow-x-auto scrollbar-hide overflow-hidden">
    <h4 class="text-lg font-semibold">{{ artistName }}</h4>
    <p class="text-sm">{{ trackTitle }}</p>
  </div>
</template>

<style></style>
