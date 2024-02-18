<script setup lang="ts">
import type { IAirtimeItem } from '~/types/hosts'

defineProps<{
  cardData: IAirtimeItem
}>()
</script>

<template>
  <div class="flex w-72 relative rounded-md overflow-hidden">
    <div v-if="cardData.replay" class="absolute uppercase text-xs top-1 right-1 rounded text-neutral-50 bg-stone-800 px-1.5 py-0.5">
      повтор
    </div>
    <div class="w-1/4 aspect-square bg-stone-700">
      <img :src="cardData.image ? cardData.image : '/images/plug280x280.svg'" alt="" />
    </div>
    <div class="flex flex-col justify-center flex-1 text-neutral-50 bg-primary px-5 py-2 space-y-1">
      <p>{{ cardData.weekday }}</p>
      <p class="text-lg font-bold">{{ cardData.start }} – {{ cardData.end }}</p>
    </div>
  </div>
</template>

<style></style>
