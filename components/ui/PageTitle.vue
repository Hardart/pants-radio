<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="pb-2 mb-8">
    <h1 class="px-2 font-bold text-3xl md:text-4xl lg:text-5xl">{{ title }}</h1>
  </div>
</template>

<style></style>
