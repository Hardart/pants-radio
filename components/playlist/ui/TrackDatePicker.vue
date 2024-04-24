<script setup lang="ts">

import { setHour } from '@/utils/setHour'


// watch(date, (curr, prev) => {
//   if (!curr) date.value = prev
// })

</script>

<template>
  <Section padding="none">
    <div class="flex items-center gap-x-4">
      <!-- <SelectDay v-model="date" /> -->
      <!-- <SelectTime v-model="hour" :date="date" /> -->
      <!-- <UButton label="Поиск" size="lg" @click="fetchTracks(date, hour)" /> -->
    </div>
  </Section>
</template>
