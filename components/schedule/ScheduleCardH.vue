<script setup lang="ts">
import type { ProgramResponse } from '~/types/program'

defineProps<{
  program: ProgramResponse
  isToday?: boolean
}>()
</script>

<template>
  <div class="relative hidden items-center gap-x-5 rounded-md bg-white px-8 py-3 shadow-md max-sm:flex-col sm:flex">
    <ScheduleOnAirStatus :program :isToday />
    <div class="w-32 text-nowrap max-sm:text-center">
      <p class="text-lg">{{ program.start }} – {{ program.end }}</p>
    </div>
    <div>
      <img class="rounded-md" v-if="program.image" :src="correctImageSrc(program.image)" width="60" height="60" alt="" />
      <img class="rounded-md" v-else src="/images/plug280x280.svg" width="60" height="60" alt="" />
    </div>
    <div>
      <h4 class="text-lg font-medium">{{ program.title }}</h4>
    </div>
    <div
      v-if="program.isReplay"
      class="absolute -right-2 origin-center rotate-90 rounded bg-sky-700 px-1.5 py-0.5 text-xs uppercase text-neutral-50"
    >
      повтор
    </div>
    <ScheduleOnAirStatus :program :isToday side="left" />
  </div>
</template>
