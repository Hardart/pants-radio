<script setup lang='ts'>
defineProps<{
  title: string
  createdAt: string
}>()
const parseDate = (date: string) => Intl.DateTimeFormat('ru', { day: 'numeric', month: 'numeric', year: 'numeric' }).format(new Date(date))
</script>
 
<template>
<div class="flex-grow flex flex-col px-4 py-4 space-y-4 md:space-y-6 lg:space-y-4">
      <h3 class="text-lg flex-grow font-medium tracking-wide group-hover:text-primary transition-colors line-clamp-2">{{ title }}</h3>
      <p class="text-sm text-green-600">{{ parseDate(createdAt) }}</p>
    </div>
</template>
 
<style></style>