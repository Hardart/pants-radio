<script lang="ts" setup>
import type { IRadioData, TrackHistory } from '~/types/track'
defineProps<{ tracks?: IRadioData[]; history?: TrackHistory[] }>()
const { isTrackPlaying, onPlayPreview } = useMediaStore()
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
    <Track
      v-if="tracks"
      v-for="track in tracks"
      :track-data="track"
      @on-toggle="onPlayPreview(track.preview, 'track')"
      :is-playing="isTrackPlaying(track.preview)"
    />
    <Track
      v-if="history"
      v-for="item in history"
      :track-data="item.track"
      :track-date="item.date"
      @on-toggle="onPlayPreview(item.track.preview, 'track')"
      :is-playing="isTrackPlaying(item.track.preview)"
    />
  </div>
</template>
