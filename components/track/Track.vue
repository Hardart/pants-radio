<script lang="ts" setup>
import type { IRadioData } from '~/types/track'

defineProps<{
  trackData: IRadioData
  isPlaying?: boolean
}>()
const emit = defineEmits(['on-toggle'])
</script>

<template>
  <div class="flex items-center bg-white px-6 py-4 w-full rounded-lg drop-shadow-xl">
    <UiPlayButton :is-playng="isPlaying" @click="$emit('on-toggle', trackData)" />
    <RadioArt :src="trackData.cover" class="ml-5" />
    <TrackInfo :artist="trackData.artistName" :title="trackData.trackTitle" />
    <!-- <TrackTime v-if="isPlaying" :duration="duration" :current-time="currentTime" /> -->
  </div>
</template>

<style scoped></style>
