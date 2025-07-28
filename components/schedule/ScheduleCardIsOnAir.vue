<script setup lang="ts">
import type { ProgramSchedule } from '~/types/program'

const { program } = defineProps<{
  program: ProgramSchedule
  leftSide?: boolean
  isToday?: boolean
}>()

// Получаем текущее время
const now = useNow()

function getProgramTime(program: ProgramSchedule) {
  // Время начала в формате 'HH:mm'
  const [startHour, startMinute] = program.startTime.split(':').map(Number)

  // Создаем объект Date для времени начала
  const start = new Date()
  start.setHours(startHour, startMinute, 0, 0)

  // Рассчитываем время окончания
  const end = new Date(start.getTime() + program.duration * 60 * 1000)

  // Проверяем, находится ли текущее время между началом и окончанием
  return { start, end }
}

const isBroadcastLive = computed(() => {
  const { start, end } = getProgramTime(program)
  return now.value >= start && now.value < end
})
</script>

<template>
  <div
    v-if="isBroadcastLive && isToday"
    class="absolute origin-center animate-pulse rounded bg-primary px-2 text-xs uppercase tracking-wide text-neutral-50"
    :class="leftSide ? '-left-11 -rotate-90 max-lg:hidden' : 'right-1 max-lg:top-2 lg:-right-11 lg:rotate-90'"
  >
    onair
  </div>
</template>
