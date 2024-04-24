<script setup lang="ts">
import type { ProgramResponse } from '~/types/program';

defineProps<{
  program: ProgramResponse
  isToday?: boolean
}>()
</script>

<template>
  <div class="hidden sm:flex max-sm:flex-col items-center gap-x-5 relative rounded-md px-8 py-3 shadow-md bg-white">
    <ScheduleOnAirStatus :program :isToday  />
    <div class="w-32 text-nowrap max-sm:text-center">
      <p class="text-lg">{{ program.start }} – {{ program.end }}</p>
    </div>
    <div>
      <img class="rounded-md" :src="program.image ? program.image : '/images/plug280x280.svg'" width="60" height="60" alt="" />
    </div>
    <div>
      <h4 class="text-lg font-medium">{{ program.title }}</h4>
    </div>
    <div
    v-if="program.isReplay"
    class="absolute uppercase text-xs origin-center rotate-90 -right-2 rounded text-neutral-50 bg-sky-700 px-1.5 py-0.5"
    >
    повтор
  </div>
  <ScheduleOnAirStatus :program :isToday side="left" />
  </div>
</template>
