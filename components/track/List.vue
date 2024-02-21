<script lang="ts" setup>
import type { IRadioData } from '~/types/track'
defineProps<{ tracks: IRadioData[] }>()
const { isTrackPlaying, onPlayPreview } = useMediaStore()
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
    <Track
      v-for="track in tracks"
      :track-data="track"
      @on-toggle="onPlayPreview(track.preview, 'track')"
      :is-playing="isTrackPlaying(track.preview)"
    />
  </div>
</template>
