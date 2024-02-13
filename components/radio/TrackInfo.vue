<script setup lang="ts">
defineProps<{
  artistName?: string
  trackTitle?: string
}>()
</script>

<template>
  <div class="text-neutral-100 text-nowrap overflow-x-auto">
    <h4 class="text-lg font-semibold">{{ artistName }}</h4>
    <p class="text-sm">{{ trackTitle }}</p>
  </div>
</template>

<style></style>
