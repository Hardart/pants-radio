<script setup lang="ts">
defineProps<{
  currentTime: number
  duration: number
}>()
</script>

<template>
  <div class="ml-auto">
    <span>{{ currentTime }} / {{ duration }}</span>
  </div>
</template>

<style></style>
