<script setup lang="ts">
import type { API } from '~/types/api'
const props = defineProps<{
  scheduleData: API.Schedule[]
}>()

const accordionState = ref<{ [key: number]: boolean }>({})
const weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
const refToday = useNow()
const correctId = (id: number) => (id === 0 ? 6 : id - 1)
const isToday = (id: number) => {
  const today = refToday.value.getDay()
  return correctId(today) === id
}
const changeState = (idx: number) => (accordionState.value[idx] = !accordionState.value[idx])

for (const dayIndex in weekdays) {
  const idx = parseInt(dayIndex)
  accordionState.value[dayIndex] = isToday(idx) ? true : false
}

const scheduleNotExist = (id: number) => props.scheduleData.every((scheduleItem) => scheduleItem._id !== id)
</script>

<template>
  <ul class="divide-y-4 lg:w-2/3 xl:w-1/2">
    <li v-for="(day, index) in weekdays">
      <div class="flex cursor-pointer items-center justify-between p-4" @click="changeState(index)">
        <p class="text-2xl font-semibold first-letter:uppercase" :class="isToday(index) && 'text-primary'">
          {{ day }}
        </p>
        <Icon name="mdi:chevron-down" class="text-stone-600" :class="accordionState[index] && 'rotate-180'" size="30" />
      </div>
      <ul class="mb-4 mt-2 space-y-3" v-if="accordionState[index]">
        <template v-for="(scheduleItem, idx) in scheduleData">
          <template v-for="program in scheduleItem.programs">
            <ScheduleCard v-if="scheduleItem._id === index" :program :is-today="isToday(index)" />
          </template>
        </template>
        <li v-if="scheduleNotExist(index)">В этот день пограмм нет</li>
      </ul>
    </li>
  </ul>
</template>
