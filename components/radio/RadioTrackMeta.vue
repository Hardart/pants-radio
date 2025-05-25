<script setup lang="ts">
defineProps<{
  artistName?: string
  trackTitle?: string
}>()
</script>

<template>
  <div class="scrollbar-hide flex-grow overflow-hidden overflow-x-auto text-neutral-100">
    <h4 class="line-clamp-1 md:text-lg md:font-semibold">{{ artistName }}</h4>
    <p class="line-clamp-1 text-xs font-thin md:text-sm">{{ trackTitle }}</p>
  </div>
</template>

<style></style>
