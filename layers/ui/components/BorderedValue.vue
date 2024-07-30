<script setup lang="ts">
defineProps<{ value: string | Number }>()
</script>

<template>
  <div class="grid place-items-center size-10 rounded-lg border-2 border-secondary/50 select-none cursor-default">{{ value }}</div>
</template>

<style></style>
