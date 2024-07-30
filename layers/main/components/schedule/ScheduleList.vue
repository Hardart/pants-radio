<script setup lang="ts">
import type { API } from '~/types/api'
const props = defineProps<{
  scheduleData: API.Schedule[]
}>()

const accordionState = ref<{ [key: number]: boolean }>({})
const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const today = useNow()
const correctDayId = (id: number) => (id == 7 ? 0 : id)
const getWeekday = (id: number) => weekdays[correctDayId(id)]
const isToday = (id: number) => today.value.getDay() === correctDayId(id)
const changeState = (idx: number) => (accordionState.value[idx] = !accordionState.value[idx])
for (let dayIndex in props.scheduleData) {
  accordionState.value[dayIndex] = today.value.getDay() == correctDayId(props.scheduleData[dayIndex]._id) ? true : false
}
</script>

<template>
  <ul class="divide-y-4 lg:w-2/3 xl:w-1/2">
    <li class="cursor-pointer py-4" v-for="(day, index) in scheduleData">
      <div class="flex items-center justify-between px-4" @click="changeState(index)">
        <p class="text-2xl font-semibold first-letter:uppercase" :class="isToday(day._id) && 'text-primary'">
          {{ getWeekday(day._id) }}
        </p>
        <Icon name="mdi:chevron-down" class="text-stone-600" :class="accordionState[index] && 'rotate-180'" size="30" />
      </div>
      <ul class="mb-4 mt-2 space-y-3" v-if="accordionState[index]">
        <li v-for="program in day.programs">
          <ScheduleCard :program :is-today="isToday(day._id)" />
        </li>
      </ul>
    </li>
  </ul>
</template>
