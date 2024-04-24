<script lang="ts" setup>
import type { Track } from '~/types/track'
defineProps<{ 
  tracks: Track[]
}>()
const { isTrackPlaying, onPlayPreview } = useMediaStore()
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
    <Track
      v-if="tracks"
      v-for="track in tracks"
      :track
      @on-toggle="onPlayPreview(track.preview, 'track')"
      :is-playing="isTrackPlaying(track.preview)"
    />

  </div>
</template>
