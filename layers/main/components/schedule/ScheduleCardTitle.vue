<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <h4 class="text-lg font-medium">{{ title }}</h4>
  </div>
</template>
