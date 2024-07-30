<script setup lang="ts">
defineProps<{
  start: string
  end: string
}>()
</script>

<template>
  <div class="w-28 text-nowrap max-sm:hidden">
    <p class="text-lg">{{ start }} – {{ end }}</p>
  </div>
</template>
