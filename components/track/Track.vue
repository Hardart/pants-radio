<script lang="ts" setup>
import type { Track } from '~/types/track'
defineProps<{
  track: Track
  showDate?: boolean
  isPlaying: boolean
  isFetching: boolean
}>()

defineEmits(['on-toggle'])
</script>

<template>
  <div class="relative flex gap-4 rounded-lg bg-white px-3 py-2 drop-shadow-xl md:gap-3 md:px-6 md:py-4">
    <RadioPlayBtn class="grid h-[60px] w-[60px] place-items-center" @click="$emit('on-toggle', track)" :is-playing :is-fetching />
    <RadioArt :src="track.cover" class="min-w-[60px]" />
    <TrackInfo :artist="track.artistName" :title="track.trackTitle" />
    <TrackDate v-if="showDate && track.createdAt" :date="track.createdAt" />
  </div>
</template>
