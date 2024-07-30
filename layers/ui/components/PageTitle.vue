<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="mb-4 pb-2 lg:mb-8">
    <h1 class="text-3xl font-bold md:text-4xl lg:text-5xl">{{ title }}</h1>
  </div>
</template>
