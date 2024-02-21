<script setup lang="ts">
const volume = defineModel('volume')
const { isDesktop } = useDevice()
</script>

<template>
  <div v-if="isDesktop" class="flex items-center flex-shrink ml-auto min-w-32">
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
