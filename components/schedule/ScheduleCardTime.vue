<script setup lang="ts">
const { start, duration } = defineProps<{
  start: string
  duration: number
  isProgram: boolean
}>()

const { end } = getProgramStartAndEnd(start, duration)
</script>

<template>
  <div class="w-18 text-nowrap max-sm:order-last max-sm:grow">
    <p class="text-lg max-md:text-sm max-sm:text-right">
      {{ start }} <span v-if="isProgram">- {{ end }}</span>
    </p>
  </div>
</template>
