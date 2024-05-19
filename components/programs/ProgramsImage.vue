<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
}>()
</script>

<template>
  <div class="min-w-80">
    <img :src="correctImageSrc(src)" class="size-full rounded-lg object-cover" :alt />
  </div>
</template>

<style></style>
