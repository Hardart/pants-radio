<script setup lang="ts">
import SelectDay from '@/pages/sections/playlist/Day.vue'
import SelectTime from '@/pages/sections/playlist/Time.vue'
const date = useState<Date>('date-limit', () => new Date())
const time = useState<string>('time-limit', () => '00')
const setDate = () => (date.value = date.value ? new Date(date.value.setHours(+time.value, 0, 0)) : new Date())
</script>

<template>
  <Section padding="none">
    <div class="flex items-center gap-x-4">
      <SelectDay v-model:date="date" />
      <SelectTime v-model:time="time" />
      <button @click="setDate">Поиск</button>
    </div>
  </Section>
</template>

<style></style>
