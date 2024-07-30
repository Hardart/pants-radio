<script setup lang="ts">
defineProps<{
  title: string
  createdAt: string
}>()
const parseDate = (date: string) =>
  Intl.DateTimeFormat('ru', { day: 'numeric', month: 'numeric', year: 'numeric' }).format(new Date(date))
</script>

<template>
  <div class="flex flex-grow flex-col space-y-4 px-4 py-4 md:space-y-6 lg:space-y-4">
    <h3 class="line-clamp-2 flex-grow text-lg font-medium tracking-wide transition-colors group-hover:text-primary">
      {{ title }}
    </h3>
    <p class="text-sm text-green-600">{{ parseDate(createdAt) }}</p>
  </div>
</template>

<style></style>
