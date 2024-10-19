<script setup lang="ts">
import type { ProgramResponse } from '~/types/program'

const props = defineProps<{
  program: ProgramResponse
  isToday?: boolean
}>()
const { end, start, title, isReplay, slug } = props.program
</script>

<template>
  <NuxtLink
    :to="`/programs/${slug}`"
    class="relative flex items-center gap-x-2 rounded-md bg-white p-3 shadow-md max-sm:pr-14 sm:px-8 md:gap-x-5"
  >
    <ScheduleCardIsOnAir :program :isToday left-side />
    <ScheduleCardTime :start :end />
    <ScheduleCardImage class="max-sm:order-first" :imageSrc="program.image" />
    <ScheduleCardTitle :title />
    <ScheduleReplay v-if="isReplay" />
    <ScheduleCardIsOnAir :program :isToday />
  </NuxtLink>
</template>
