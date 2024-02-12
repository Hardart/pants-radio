<script setup lang="ts">
const { scheduleData } = defineProps<{
  scheduleData: IScheduleItem[]
}>()

const accordionState = ref<{ [key: number]: boolean }>({})

const weekdayNumber = useNow()

for (let i = 0; i < scheduleData.length; i++) {
  accordionState.value[i] = weekdayNumber.value.getDay() == scheduleData[i].weekdayId ? true : false
}
</script>

<template>
  <ul class="lg:w-2/3 xl:w-1/2 divide-y-4">
    <li class="py-4 cursor-pointer" v-for="(day, index) in scheduleData">
      <div class="flex justify-between items-center px-4" @click="accordionState[index] = !accordionState[index]">
        <p class="text-2xl font-semibold first-letter:uppercase" :class="weekdayNumber.getDay() === day.weekdayId && 'text-primary'">
          {{ day.weekdayTitle }}
        </p>
        <Icon name="mdi:chevron-up" class="text-stone-600" :class="accordionState[index] && 'rotate-180'" size="30" />
      </div>
      <ul class="mb-4 mt-2 space-y-3" v-if="accordionState[index]">
        <li v-for="program in day.programs">
          <ScheduleCardV :card-data="program" />
          <ScheduleCardH :card-data="program" :is-today="weekdayNumber.getDay() === day.weekdayId" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<style></style>
