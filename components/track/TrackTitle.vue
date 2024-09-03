<script lang="ts" setup>
defineProps<{ title: string }>()
</script>

<template>
  <p class="line-clamp-1 text-xs md:text-sm">{{ title }}</p>
</template>
