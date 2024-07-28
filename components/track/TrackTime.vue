<script setup lang="ts">
defineProps<{
  currentTime: number
  duration: number
}>()
</script>

<template>
  <div class="ml-auto">
    <span>00:{{ Math.trunc(currentTime) }} / 00:{{ Math.trunc(duration) }}</span>
  </div>
</template>
