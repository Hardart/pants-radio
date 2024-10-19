<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <h4 class="font-medium sm:text-lg">{{ title }}</h4>
  </div>
</template>
