<script setup lang="ts">
const { scheduleData } = defineProps<{
  scheduleData: IScheduleItem[]
}>()

const accordionState = ref<{ [key: number]: boolean }>({})

const weekdayNumber = 3

for (let i = 0; i < scheduleData.length; i++) {
  accordionState.value[i] = weekdayNumber == scheduleData[i].weekdayId ? true : false
}
</script>

<template>
  <ul class="w-1/2 divide-y-4">
    <li class="py-4 cursor-pointer" @click="accordionState[index] = !accordionState[index]" v-for="(day, index) in scheduleData">
      <div class="flex justify-between items-center px-4">
        <p class="text-2xl font-semibold first-letter:uppercase" :class="weekdayNumber === day.weekdayId && 'text-primary'">
          {{ day.weekdayTitle }}
        </p>
        <Icon name="mdi:chevron-up" class="text-stone-600" :class="accordionState[index] && 'rotate-180'" size="30" />
      </div>
      <ul class="mb-4 mt-2 space-y-3" v-if="accordionState[index]">
        <li v-for="program in day.programs">
          <SheduleCard :card-data="program" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<style></style>
