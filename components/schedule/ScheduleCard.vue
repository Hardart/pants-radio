<script setup lang="ts">
import type { ProgramSchedule } from '~/types/program'

defineProps<{
  program: ProgramSchedule
  isToday?: boolean
}>()
</script>

<template>
  <li>
    <NuxtLink
      :to="`/programs/${program.slug}`"
      class="relative flex items-center gap-x-2 rounded-md bg-white p-3 shadow-md sm:px-8 md:gap-x-5"
    >
      <ScheduleCardIsOnAir :program left-side :is-today />
      <ScheduleCardTime :start="program.startTime" :duration="program.duration" :is-program="program.type === 'программа'" />
      <ScheduleCardImage :imageSrc="program.image" />
      <ScheduleCardTitle :title="program.title" />
      <ScheduleReplay v-if="program.isReplay" />
      <ScheduleCardIsOnAir :program :is-today />
    </NuxtLink>
  </li>
</template>
