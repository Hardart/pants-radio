<script lang="ts" setup>
import type { Track } from '~/types/track'
defineProps<{ 
  tracks: Track[]
  showDate?: boolean
}>()
const { isTrackPlaying, onPlayPreview } = useMediaStore()
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5" >
    <Track
      v-for="track in tracks"
      :track
      :show-date
      :is-playing="isTrackPlaying(track.preview)"
      @on-toggle="onPlayPreview(track.preview, 'track')"
    />

  </div>
</template>
