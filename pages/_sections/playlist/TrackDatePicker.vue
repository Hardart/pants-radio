<script setup lang="ts">
import SelectDay from '@/pages/_sections/playlist/Day.vue'
import SelectTime from '@/pages/_sections/playlist/Time.vue'
import { setHour } from '@/utils/setHour'
const { fetchTracks } = useArchiveStore()
const date = ref(new Date())
const hour = ref(setHour())
watch(date, (curr, prev) => {
  if (!curr) date.value = prev
})
fetchTracks(date.value, hour.value)
</script>

<template>
  <Section padding="none">
    <div class="flex items-center gap-x-4">
      <SelectDay v-model="date" />
      <SelectTime v-model="hour" :date="date" />
      <UButton label="Поиск" size="lg" @click="fetchTracks(date, hour)" />
    </div>
  </Section>
</template>
