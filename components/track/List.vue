<script lang="ts" setup>
const tracks = [
  { id: 0, title: 'Fast And Furious 3', artist: 'Some One', link: './audio/6.mp3' },
  { id: 1, title: 'Diamonds', artist: 'Rihanna', link: './audio/Rihanna - Diamonds.mp3' },
]

const track = ref()
const { initTrack, onPlay } = useTracksStore()
const { activeTrackId } = storeToRefs(useTracksStore())
initTrack(track)
</script>

<template>
  <div class="space-y-7">
    <audio ref="track" />
    <template v-for="track in tracks">
      <Track :track-data="track" :is-playing="track.id === activeTrackId" @on-toggle="onPlay" />
    </template>
  </div>
</template>

<style scoped></style>
