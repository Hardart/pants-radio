<script lang="ts" setup>
import type { Track } from '~/types/track'

const jingleData: Track = {
  artistName: 'Радио Штаны',
  trackTitle: 'Прямой эфир',
  cover: '/assets/simple_logo.svg',
  preview: ''
}
const trackData = ref<Track>(jingleData)
const radioURL = 'https://stream.elarin.ru/rsh_federal'
const radioElement = ref()
const { initMediaElement, isTrackPlaying, onPlayPreview, storeRefs, isTrackFetching } = useMediaStore()
const { fetching, volume } = storeRefs()
const { $io } = useNuxtApp()
onMounted(() => {
  initMediaElement(radioElement)
  const socket = $io()
  socket.on('meta', (track: Track) => (trackData.value = track))
  socket.on('host:data', () => useState('host', () => true))
})
</script>

<template>
  <div class="mx-4 flex flex-grow items-center gap-x-4">
    <audio class="sr-only" ref="radioElement" preload="none" />
    <RadioPlayBtn
      class="mx-2 border-x border-neutral-500 px-5"
      :is-fetching="isTrackFetching(radioURL)"
      :is-playing="isTrackPlaying(radioURL)"
      @click="onPlayPreview(radioURL, 'radio')"
    />
    <RadioArt :src="trackData?.cover" />
    <RadioTrackMeta :artist-name="trackData?.artistName" :track-title="trackData?.trackTitle" class="max-sm:hidden" />
    <RadioVolume v-model:volume.number="volume" />
    <RadioHost />
  </div>
</template>
