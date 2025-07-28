<script setup lang="ts">
import type { ScheduleWithManyStartTime } from '~/types/program'

const { schedule } = defineProps<{
  schedule: ScheduleWithManyStartTime
  imageSrc?: string
}>()

const weeekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

const findProgramsDays = (dayRange: number, dayIndex: number) => {
  const days = Array.from({ length: dayRange }, (_, i) => i + dayIndex)
  return days.map((dayItem) => weeekdays[dayItem]).join(', ')
}

const programDay = computed(() => {
  switch (true) {
    case schedule.dayRange === 7:
      return 'каждый день'

    case schedule.dayRange === 5 && schedule.dayIndex === 0:
      return 'по будням'

    case schedule.dayRange === 2 && schedule.dayIndex === 5:
      return 'по выходным'

    case schedule.dayRange === 1:
      const idx = schedule.dayIndex
      return weeekdays[idx]

    default:
      return findProgramsDays(schedule.dayRange, schedule.dayIndex)
  }
})
</script>

<template>
  <div class="shedule-shadow relative flex h-20 min-w-64 max-w-96 grow rounded-md bg-primary">
    <div class="h-full w-20 flex-shrink-0">
      <img v-if="imageSrc" :src="correctImageSrc(imageSrc)" class="size-full object-cover" alt="" />
    </div>
    <div class="grow px-2">
      <p class="whitespace-nowrap rounded text-lg font-bold text-white drop-shadow-md first-letter:uppercase">
        {{ programDay }}
      </p>
      <div class="mt-1 text-neutral-50">
        <p class="flex items-center justify-between text-sm">
          {{ schedule.startTime.join(', ') }}
          <span v-if="schedule.isReplay" class="rounded-lg bg-stone-800 px-1.5 py-0.5 text-xs uppercase text-neutral-50">
            повтор
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
