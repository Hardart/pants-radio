<script setup lang="ts">
import { type Hour } from '@/utils/setHour'
const date = defineModel<Date>({ required: true })
const hour = defineModel<Hour>('hour', { required: true })
defineProps<{
  startFrom?: string
}>()
</script>

<template>
  <Section padding="none">
    <div class="flex items-center gap-x-4">
      <PlaylistArchiveDay v-model="date" :startFrom />
      <PlaylistArchiveTime v-model="date" v-model:hour="hour" />
    </div>
  </Section>
</template>
