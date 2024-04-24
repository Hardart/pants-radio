<script lang="ts" setup>
import type { Track } from '~/types/track'

defineProps<{
  track: Track
  trackDate?: string
  isPlaying?: boolean
}>()
const emit = defineEmits(['on-toggle'])
</script>

<template>
  <div class="flex items-center bg-white px-6 py-4 w-full rounded-lg drop-shadow-xl">
    <UiPlayButton :is-playng="isPlaying" @click="$emit('on-toggle', track)" />
    <HeaderRadioArt :src="track.cover" class="ml-5" />
    <TrackInfo :artist="track.artistName" :title="track.trackTitle" />
    <TrackDate v-if="trackDate" :date="trackDate" />
    <!-- <TrackTime v-if="isPlaying" :duration="duration" :current-time="currentTime" /> -->
  </div>
</template>

<style scoped></style>
