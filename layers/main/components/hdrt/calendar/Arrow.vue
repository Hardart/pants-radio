<script setup lang="ts">
defineProps<{
  right?: boolean
}>()
</script>

<template>
  <div
    class="grid place-items-center w-8 h-8 rounded-lg text-neutral-500 hover:bg-primary/75 hover:text-neutral-100 cursor-pointer select-none"
  >
    <Icon name="material-symbols:arrow-back-rounded" size="24" :class="right && 'rotate-180'" />
  </div>
</template>

<style></style>
