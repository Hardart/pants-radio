<script setup lang="ts">
import type { ProgramResponse } from '~/types/program'

const props = defineProps<{
  program: ProgramResponse
  isToday?: boolean
}>()
const { end, start, title, isReplay } = props.program
</script>

<template>
  <div class="relative flex items-center gap-x-5 rounded-md bg-white px-8 py-3 shadow-md">
    <ScheduleCardIsOnAir :program :isToday />
    <ScheduleCardTime :start :end />
    <ScheduleCardImage class="max-sm:order-first" :imageSrc="program.image" />
    <ScheduleCardTitle :title />
    <ScheduleReplay v-if="isReplay" />
    <ScheduleCardIsOnAir :program :isToday left-side />
  </div>
</template>
