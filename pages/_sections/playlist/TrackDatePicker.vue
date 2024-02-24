<script setup lang="ts">
import SelectDay from '@/pages/_sections/playlist/Day.vue'
import SelectTime from '@/pages/_sections/playlist/Time.vue'
import { setHour } from '@/utils/setHour'
const { fetchTracks } = useArchiveStore()
const date = ref(new Date())
const time = ref(setHour())
const setDate = () => (date.value = date.value ? new Date(date.value.setHours(+time.value, 0, 0)) : new Date())
</script>

<template>
  <Section padding="none">
    <div class="flex items-center gap-x-4">
      <SelectDay v-model:date="date" />
      <SelectTime v-model:time="time" />
      <UButton label="Поиск" size="lg" @click="fetchTracks(setDate())" />
    </div>
  </Section>
</template>
