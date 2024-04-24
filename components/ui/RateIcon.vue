<script setup lang="ts">
defineProps<{
  value: string | number
}>()
</script>

<template>
  <div>
    <div
      class="grid place-items-center w-10 h-10 text-primary border-primary border-2 rounded-lg select-none hover:bg-primary hover:text-neutral-50"
    >
      {{typeof value === 'number' ? `${value}+` : value }}
    </div>
  </div>
</template>

<style></style>
