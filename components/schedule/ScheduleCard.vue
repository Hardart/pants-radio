<script setup lang="ts">
import type { ProgramResponse } from '~/types/program'

defineProps<{
  program: ProgramResponse
  isToday?: boolean
}>()
</script>

<template>
  <li v-if="program.isPublished">
    <NuxtLink
      :to="`/programs/${program.slug}`"
      class="relative flex items-center gap-x-2 rounded-md bg-white p-3 shadow-md max-sm:pr-14 sm:px-8 md:gap-x-5"
    >
      <ScheduleCardIsOnAir :program :isToday left-side />
      <ScheduleCardTime :start="program.start" :end="program.end" />
      <ScheduleCardImage class="max-sm:order-first" :imageSrc="program.image" />
      <ScheduleCardTitle :title="program.title" />
      <ScheduleReplay v-if="program.isReplay" />
      <ScheduleCardIsOnAir :program :isToday />
    </NuxtLink>
  </li>
  <li v-else class="relative flex items-center gap-x-2 rounded-md bg-white p-3 shadow-md max-sm:pr-14 sm:px-8 md:gap-x-5">
    <ScheduleCardIsOnAir :program :isToday left-side />
    <ScheduleCardTime :start="program.start" :end="program.end" />
    <ScheduleCardImage class="max-sm:order-first" :imageSrc="program.image" />
    <ScheduleCardTitle :title="program.title" />
    <ScheduleReplay v-if="program.isReplay" />
    <ScheduleCardIsOnAir :program :isToday />
  </li>
</template>
