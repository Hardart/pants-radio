<script setup lang="ts">
const props = defineProps<{ date: string }>()
const trackTime = computed(() => new Date(props.date).toLocaleTimeString('ru', { minute: '2-digit', hour: '2-digit' }))
const trackDate = computed(() => new Date(props.date).toLocaleDateString('ru', { dateStyle: 'short' }))
</script>

<template>
  <div class="ml-auto flex flex-col justify-center text-right text-secondary/70">
    <span class="max-md:font-bold">{{ trackTime }}</span>
    <span class="max-md:hidden">{{ trackDate }}</span>
  </div>
</template>

<style></style>
