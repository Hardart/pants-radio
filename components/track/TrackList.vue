<script lang="ts" setup>
import type { Track } from '~/types/track'
defineProps<{
  tracks: Track[]
  showDate?: boolean
}>()
const { isTrackPlaying, onPlayPreview, isTrackFetching } = useMediaStore()
</script>

<template>
  <div class="grid grid-cols-1 gap-2 md:gap-5 lg:grid-cols-2">
    <h4 v-if="!tracks.length">Что-то пошло не так и история треков не сохранилась, приносим свои извинения</h4>
    <Track
      v-else
      v-for="track in tracks"
      :track
      :show-date
      :is-fetching="isTrackFetching(track.preview)"
      :is-playing="isTrackPlaying(track.preview)"
      @on-toggle="onPlayPreview(track.preview, 'track')"
    />
  </div>
</template>
