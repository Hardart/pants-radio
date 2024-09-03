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
  <div class="relative flex gap-x-1.5 rounded-lg bg-white px-3 py-2 drop-shadow-md md:gap-x-3 md:px-6 md:py-4 md:drop-shadow-lg">
    <RadioPlayBtn
      class="grid size-[50px] place-items-center md:size-[60px]"
      @click="$emit('on-toggle', track)"
      :is-playing
      :is-fetching
    />
    <RadioArt :src="track.cover" class="size-[50px] md:size-[60px]" />
    <TrackInfo :artist="track.artistName" :title="track.trackTitle" />
    <TrackDate v-if="showDate && track.createdAt" :date="track.createdAt" />
  </div>
</template>
