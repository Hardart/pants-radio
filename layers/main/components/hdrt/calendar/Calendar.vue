<script setup lang="ts">
const date = ref(new Date())
const day = ref(date.value.getDate())
const month = ref(date.value.getMonth())
const year = ref(date.value.getFullYear())
const updatedDate = computed(() => new Date(year.value, month.value, 1))
const setMonth = (m: 1 | -1) => (month.value += m)
const onDay = (d: number) => (date.value = new Date(year.value, month.value, d))
</script>

<template>
  <div>Выбранная дата - {{ Intl.DateTimeFormat('ru').format(date) }}</div>
  <div class="inline-block bg-white p-2 drop-shadow-xl">
    <div class="mb-4 flex items-center justify-between">
      <HdrtCalendarArrow @click="setMonth(-1)" />
      <p class="font-medium uppercase">
        {{ Intl.DateTimeFormat('ru', { month: 'long', year: 'numeric' }).format(updatedDate).slice(0, -3) }}
      </p>
      <HdrtCalendarArrow @click="setMonth(1)" right />
    </div>
    <HdrtCalendarWeekdays />
    <HdrtCalendarDays @set-day="onDay" :day="day" :month="month" :year="year" />
  </div>
</template>

<style></style>
