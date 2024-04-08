<script setup lang="ts">
import type { IScheduleProgram } from '~/types/schedule'
defineProps<{
  cardData: IScheduleProgram
}>()
</script>

<template>
  <div class="sm:hidden flex items-center gap-x-5 relative rounded-md px-4 py-3 shadow-md bg-white">
    <div>
      <img class="rounded-md" :src="cardData.image ? cardData.image : '/images/plug280x280.svg'" width="60" height="60" alt="" />
    </div>
    <div>
      <div class="w-32 text-nowrap">
        <p class="text-lg">{{ cardData.start }} – {{ cardData.end }}</p>
      </div>

      <div>
        <h4 class="text-lg font-medium">{{ cardData.title }}</h4>
      </div>
    </div>
  </div>
</template>
