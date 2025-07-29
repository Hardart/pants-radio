<script setup lang="ts">
const { start, duration } = defineProps<{
  start: string
  duration: number
  isProgram: boolean
}>()

const { end } = getProgramStartAndEnd(start, duration)
</script>

<template>
  <div class="w-18 text-nowrap max-sm:hidden">
    <p class="text-lg">
      {{ start }} <span v-if="isProgram">- {{ end }}</span>
    </p>
  </div>
</template>
