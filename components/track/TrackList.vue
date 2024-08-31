<script lang="ts" setup>
import type { Track } from '~/types/track'
defineProps<{
  tracks: Track[]
  showDate?: boolean
}>()
const { isTrackPlaying, onPlayPreview, isTrackFetching } = useMediaStore()
</script>

<template>
  <div class="grid grid-cols-1 gap-3 md:gap-5 lg:grid-cols-2">
    <Track
      v-for="track in tracks"
      :track
      :show-date
      :is-fetching="isTrackFetching(track.preview)"
      :is-playing="isTrackPlaying(track.preview)"
      @on-toggle="onPlayPreview(track.preview, 'track')"
    />
  </div>
</template>
