<script setup lang="ts">
const { date } = defineProps<{ date: string }>()
const trackTime = new Date(date).toLocaleTimeString('ru', { minute: '2-digit', hour: '2-digit' })
const trackDate = new Date(date).toLocaleDateString('ru', { dateStyle: 'short' })
</script>

<template>
  <div class="ml-auto flex flex-col justify-center text-right text-secondary/70">
    <span class="max-md:font-bold">{{ trackTime }}</span>
    <span class="max-md:hidden">{{ trackDate }}</span>
  </div>
</template>

<style></style>
