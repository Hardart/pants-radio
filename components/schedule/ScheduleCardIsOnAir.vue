<script setup lang="ts">
import type { ProgramResponse } from '~/types/program'

defineProps<{
  program: ProgramResponse
  leftSide?: boolean
  isToday?: boolean
}>()
const timeParser = (time: string) => time.split(':').map((value) => parseInt(value))

const isInRange = (time: Date, start: string, end: string) => {
  const [hStart, mStart] = timeParser(start)
  const [hEnd, mEnd] = timeParser(end)
  const startTime = new Date().setHours(hStart, mStart)
  const endTime = new Date().setHours(hEnd, mEnd)
  return time.valueOf() >= startTime && time.valueOf() <= endTime
}
</script>

<template>
  <div
    v-if="isInRange(new Date(), program.start, program.end) && isToday"
    class="absolute origin-center animate-pulse rounded bg-primary px-2 text-xs uppercase tracking-wide text-neutral-50"
    :class="leftSide ? '-left-11 -rotate-90 max-lg:hidden' : 'right-1 max-lg:top-2 lg:-right-11 lg:rotate-90'"
  >
    onair
  </div>
</template>
