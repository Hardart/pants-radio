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
  <div class="flex items-center gap-x-5 relative rounded-md px-8 py-3 shadow-md bg-white">
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
    <div class="w-32">
      <p class="text-lg">{{ cardData.start }} – {{ cardData.end }}</p>
    </div>
    <div>
      <img class="rounded-md" :src="cardData.image ? cardData.image : '/images/plug280x280.svg'" width="60" height="60" alt="" />
    </div>
    <div>
      <h4 class="text-lg font-medium">{{ cardData.title }}</h4>
    </div>
    <div
      v-if="cardData.replay"
      class="absolute uppercase text-xs origin-center rotate-90 -right-2 rounded text-neutral-50 bg-sky-700 px-1.5 py-0.5"
    >
      повтор
    </div>
  </div>
</template>
