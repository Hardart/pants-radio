<script setup lang="ts">
const now = new Date()
const start = '00:51'
const end = '01:22'

const timeParser = (time: string) => time.split(':').map(value => parseInt(value))

const isInRange = (time: Date) => {
  const [hStart, mStart] = timeParser(start)
  const [hEnd, mEnd] = timeParser(end)
  const startTime = new Date().setHours(hStart, mStart)
  const endTime = new Date().setHours(hEnd, mEnd)
  return time.valueOf() >= startTime && time.valueOf() <= endTime
}
</script>

<template>
  <div class="">{{ isInRange(now) }}</div>
</template>

<style></style>
