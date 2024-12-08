<script setup lang="ts">
defineProps<{
  right?: boolean
}>()
</script>

<template>
  <div
    class="grid h-8 w-8 cursor-pointer select-none place-items-center rounded-lg text-neutral-500 hover:bg-primary/75 hover:text-neutral-100"
  >
    <Icon name="material-symbols:arrow-back-rounded" size="24" :class="right && 'rotate-180'" />
  </div>
</template>

<style></style>
