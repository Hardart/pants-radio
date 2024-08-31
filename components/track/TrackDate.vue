<script setup lang="ts">
defineProps<{ date: string }>()
</script>

<template>
  <div class="ml-auto flex flex-col text-right text-secondary/70 max-sm:hidden">
    <span>{{ new Date(date).toLocaleTimeString('ru', { minute: '2-digit', hour: '2-digit' }) }} </span>
    <span>{{ new Date(date).toLocaleDateString('ru', { dateStyle: 'short' }) }} </span>
  </div>
</template>

<style></style>
