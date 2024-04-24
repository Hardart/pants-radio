<script setup lang="ts">
import type { API } from '~/types/api'
const props = defineProps<{
  scheduleData: API.Schedule[]
}>()

const accordionState = ref<{ [key: number]: boolean }>({})
const weekdays = ["Воскресенье", 'Понедельник', "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
const weekdayNumber = useNow()

for (let i = 0; i < props.scheduleData.length; i++) {
  accordionState.value[i] = weekdayNumber.value.getDay() == props.scheduleData[i]._id  ? true : false
}

const correctDayId = (id: number) => id == 7 ? 0 : id
</script>

<template>
  <ul class="lg:w-2/3 xl:w-1/2 divide-y-4">
    <li class="py-4 cursor-pointer" v-for="(day, index) in scheduleData">
      <div class="flex justify-between items-center px-4" @click="accordionState[index] = !accordionState[index]">
        <p class="text-2xl font-semibold first-letter:uppercase" :class="weekdayNumber.getDay() === correctDayId(day._id) && 'text-primary'">
          {{weekdays[correctDayId(day._id)] }}
        </p>
        <Icon name="mdi:chevron-up" class="text-stone-600" :class="accordionState[index] && 'rotate-180'" size="30" />
      </div>
      <ul class="mb-4 mt-2 space-y-3" v-if="accordionState[index]">
        <li v-for="program in day.programs">
          <ScheduleCardV :program />
          <ScheduleCardH :program :is-today="weekdayNumber.getDay() === correctDayId(day._id)" />
        </li>
      </ul>
    </li>
  </ul>
</template>
