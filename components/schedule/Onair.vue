<script setup lang="ts">
defineProps<{
  cardData: IScheduleProgram
}>()
const timeParser = (time: string) => time.split(':').map(value => parseInt(value))

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
    v-if="isInRange(new Date(), cardData.start, cardData.end)"
    class="absolute -right-11 tracking-wide px-2 text-xs uppercase text-neutral-50 rotate-90 origin-center rounded bg-primary animate-pulse"
  >
    onair
  </div>
  <div
    v-if="isInRange(new Date(), cardData.start, cardData.end)"
    class="absolute -left-11 tracking-wide px-2 text-xs uppercase text-neutral-50 -rotate-90 origin-center rounded bg-primary animate-pulse"
  >
    onair
  </div>
</template>

<style></style>
