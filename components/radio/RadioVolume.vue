<script setup lang="ts">
const volume = defineModel('volume', { type: Number })
const { isDesktop } = useDevice()
</script>

<template>
  <div class="flex items-center flex-shrink ml-auto min-w-32" v-if="isDesktop">
    <URange
      :min="0"
      :max="100"
      v-model.number="volume"
      size="sm"
      :ui="{ thumb: { background: '[&::-webkit-slider-thumb]:bg-secondary' } }"
    />
  </div>
</template>

<style></style>
