<script lang="ts" setup>
defineProps<{
  trackData: ITrackData
  isPlaying: boolean
}>()
const emit = defineEmits(['on-toggle'])
</script>

<template>
  <div class="flex items-center bg-white px-6 py-4 w-full rounded-lg drop-shadow-xl">
    <UiPlayButton :is-playng="isPlaying" @click="$emit('on-toggle', trackData)" />
    <TrackAlbumArt />
    <TrackInfo :artist="trackData.artist" :title="trackData.title" />
    <!-- <TrackTime :duration="duration" :current-time="currentTime" /> -->
  </div>
</template>

<style scoped></style>
