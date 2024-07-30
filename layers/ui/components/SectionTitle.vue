<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="mb-8 border-b-2 pb-2">
    <h2 class="px-2 text-4xl font-bold">{{ title }}</h2>
    <slot name="desc"></slot>
  </div>
</template>

<style></style>
