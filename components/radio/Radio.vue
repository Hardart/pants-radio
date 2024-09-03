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
const { volume } = storeRefs()
const { $io } = useNuxtApp()
onMounted(() => {
  initMediaElement(radioElement)
  const socket = $io()
  socket.on('meta', (track: Track) => (trackData.value = track))
  socket.on('host:data', () => useState('host', () => true))
})
</script>

<template>
  <div class="z-10 flex flex-grow items-center gap-x-2 bg-secondary max-md:px-4 max-md:py-3 md:mx-4 md:gap-x-4">
    <audio class="sr-only" ref="radioElement" preload="none" />
    <RadioPlayBtn
      class="grid min-w-[40px] place-items-center border-neutral-500 md:mx-2 md:min-w-[60px] md:border-x md:px-5"
      :is-fetching="isTrackFetching(radioURL)"
      :is-playing="isTrackPlaying(radioURL)"
      @click="onPlayPreview(radioURL, 'radio')"
    />
    <RadioArt :src="trackData?.cover" class="size-[40px] md:size-[60px]" />
    <RadioTrackMeta :artist-name="trackData?.artistName" :track-title="trackData?.trackTitle" />
    <RadioVolume v-model:volume.number="volume" />
    <RadioHost />
  </div>
</template>
