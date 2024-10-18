<script setup lang="ts">
defineProps<{
  link: string
}>()
</script>

<template>
  <div class="absolute inset-0">
    <NuxtLink class="absolute inset-0" :to="`/news${link}`" />
  </div>
</template>
