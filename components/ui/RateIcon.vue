<script setup lang="ts">
defineProps<{
  value: string
}>()
</script>

<template>
  <div>
    <div class="grid place-items-center w-10 h-10 text-primary border-primary border-2 rounded-lg hover:bg-primary hover:text-neutral-50">
      {{ value }}
    </div>
  </div>
</template>

<style></style>
