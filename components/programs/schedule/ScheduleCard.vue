<script setup lang="ts">
import type { ProgramSchedule } from '~/types/schedule'

const props = defineProps<{
  schedule: ProgramSchedule
  imageSrc: string
}>()
const weeekdays = [
  { id: 1, title: 'Понедельник' },
  { id: 2, title: 'Вторник' },
  { id: 3, title: 'Среда' },
  { id: 4, title: 'Четверг' },
  { id: 5, title: 'Пятница' },
  { id: 6, title: 'Суббота' },
  { id: 7, title: 'Воскресенье' }
]

const programDay = computed(() => {
  switch (true) {
    case props.schedule.weekdayIds.length === 7:
      return 'каждый день'

    case props.schedule.weekdayIds.every((id, index) => id == index + 1) && props.schedule.weekdayIds.length == 5:
      return 'по будням'

    case props.schedule.weekdayIds.length === 2 && props.schedule.weekdayIds.includes(6) && props.schedule.weekdayIds.includes(7):
      return 'по выходным'

    case props.schedule.weekdayIds.length === 1:
      return weeekdays.find((day) => day.id === props.schedule.weekdayIds[0])?.title

    default:
      return props.schedule.weekdayIds.map((id) => weeekdays.find((day) => day.id === id)?.title).join(', ')
  }
})
</script>

<template>
  <div class="relative flex h-20 min-w-64 grow overflow-hidden rounded-md border-2 border-secondary bg-primary">
    <div class="h-full w-20">
      <img :src="correctImageSrc(imageSrc)" class="size-full object-cover" alt="" />
    </div>
    <div class="grow px-2">
      <p class="whitespace-nowrap rounded text-lg font-bold text-white drop-shadow-md first-letter:uppercase">
        {{ programDay }}
      </p>
      <div class="mt-1 text-neutral-50">
        <p class="flex items-center justify-between text-sm" v-for="prop in schedule.properties">
          с {{ prop.start }} до {{ prop.end }}
          <span v-if="prop.isReplay" class="rounded-lg bg-stone-800 px-1.5 py-0.5 text-xs uppercase text-neutral-50">повтор</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
