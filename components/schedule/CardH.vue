<script setup lang="ts">
defineProps<{
  cardData: IScheduleProgram
}>()
</script>

<template>
  <div class="hidden sm:flex max-sm:flex-col items-center gap-x-5 relative rounded-md px-8 py-3 shadow-md bg-white">
    <ScheduleOnair :card-data="cardData" />
    <div class="w-32 text-nowrap max-sm:text-center">
      <p class="text-lg">{{ cardData.start }} – {{ cardData.end }}</p>
    </div>
    <div>
      <img class="rounded-md" :src="cardData.image ? cardData.image : '/images/plug280x280.svg'" width="60" height="60" alt="" />
    </div>
    <div>
      <h4 class="text-lg font-medium">{{ cardData.title }}</h4>
    </div>
    <div
      v-if="cardData.replay"
      class="absolute uppercase text-xs origin-center rotate-90 -right-2 rounded text-neutral-50 bg-sky-700 px-1.5 py-0.5"
    >
      повтор
    </div>
  </div>
</template>
