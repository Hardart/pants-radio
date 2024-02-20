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
  <div class="inline-block p-2 bg-white drop-shadow-xl">
    <div class="flex items-center justify-between mb-4">
      <UButton @click="setMonth(-1)">-</UButton>
      <p class="uppercase font-medium">
        {{ Intl.DateTimeFormat('ru', { month: 'long', year: 'numeric' }).format(updatedDate).slice(0, -3) }}
      </p>
      <UButton @click="setMonth(1)">+</UButton>
    </div>
    <HdrtCalendarWeekdays />
    <HdrtCalendarDays @set-day="onDay" :day="day" :month="month" :year="year" />
  </div>
</template>

<style></style>
