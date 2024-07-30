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
  <div class="flex w-full rounded-lg bg-white px-6 py-4 drop-shadow-xl">
    <RadioPlayBtn class="mr-2 grid place-items-center" @click="$emit('on-toggle', track)" :is-playing :is-fetching />
    <RadioArt :src="track.cover" class="ml-2 min-w-[60px]" />
    <TrackInfo :artist="track.artistName" :title="track.trackTitle" />
    <TrackDate v-if="showDate && track.createdAt" :date="track.createdAt" />
  </div>
</template>
