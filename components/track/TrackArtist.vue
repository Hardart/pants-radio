<script lang="ts" setup>
defineProps<{
  artist: string
}>()
</script>

<template>
  <h5 class="mb-1 line-clamp-1 font-semibold leading-4 md:mb-1.5">{{ artist }}</h5>
</template>
