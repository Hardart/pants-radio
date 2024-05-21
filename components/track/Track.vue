<script lang="ts" setup>
import type { Track } from '~/types/track'

defineProps<{
  track: Track
  showDate?: boolean
  isPlaying?: boolean
}>()
defineEmits(['on-toggle'])
</script>

<template>
  <div class="flex w-full rounded-lg bg-white px-6 py-4 drop-shadow-xl">
    <UiPlayButton class="min-h-[60px] min-w-[60px]" :is-playng="isPlaying" @click="$emit('on-toggle', track)" />
    <RadioArt :src="track.cover" class="ml-2 min-w-[60px]" />
    <TrackInfo :artist="track.artistName" :title="track.trackTitle" />
    <TrackDate v-if="showDate && track.createdAt" :date="track.createdAt" />
    <!-- <TrackTime v-if="isPlaying" :duration="duration" :current-time="currentTime" /> -->
  </div>
</template>

<style scoped></style>
