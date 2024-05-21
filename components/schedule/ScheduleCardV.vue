<script setup lang="ts">
import type { ProgramResponse } from '~/types/program'

defineProps<{
  program: ProgramResponse
}>()
</script>

<template>
  <div class="relative flex items-center gap-x-5 rounded-md bg-white px-4 py-3 shadow-md sm:hidden">
    <div>
      <img class="rounded-md" v-if="program.image" :src="correctImageSrc(program.image)" width="60" height="60" alt="" />
      <img class="rounded-md" v-else src="/images/plug280x280.svg" width="60" height="60" alt="" />
    </div>
    <div>
      <div class="w-32 text-nowrap">
        <p class="text-lg">{{ program.start }} – {{ program.end }}</p>
      </div>

      <div>
        <h4 class="text-lg font-medium">{{ program.title }}</h4>
      </div>
    </div>
  </div>
</template>
