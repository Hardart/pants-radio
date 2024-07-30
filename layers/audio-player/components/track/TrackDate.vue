<script setup lang="ts">
defineProps<{ date: string }>()
</script>

<template>
  <div class="flex flex-col text-right ml-auto text-secondary/70">
    <span>{{ new Date(date).toLocaleTimeString('ru', { minute: '2-digit', hour: '2-digit' }) }} </span>
    <span>{{ new Date(date).toLocaleDateString('ru', { dateStyle: 'short' }) }} </span>
  </div>
</template>

<style></style>
