<script lang="ts" setup>
import type { Track } from '~/types/track'

const jingleData: Track = {
  artistName: 'Радио Штаны',
  trackTitle: 'Прямой эфир',
  cover: '/images/simple_logo.svg',
  preview: ''
}
const trackData = ref<Track>(jingleData)
const radioURL = 'https://stream.lolamedia.ru/rsh_federal'
const radioElement = ref()
const { initMediaElement, isTrackPlaying, onPlayPreview, storeRefs } = useMediaStore()
const { fetching, volume } = storeRefs()

onMounted(() => {
  // onSocketConnect(trackData)
  initMediaElement(radioElement)
})
</script>

<template>
  <div class="mx-4 flex flex-grow items-center gap-x-4">
    <audio class="sr-only" ref="radioElement" preload="none" />
    <HeaderRadioPlayBtn
      :is-fetching="fetching"
      :playing-radio="isTrackPlaying(radioURL)"
      @click="onPlayPreview(radioURL, 'radio')"
    />
    <HeaderRadioArt :src="trackData?.cover" />
    <HeaderRadioTrackMeta :artist-name="trackData?.artistName" :track-title="trackData?.trackTitle" class="max-sm:hidden" />
    <HeaderRadioVolume v-model:volume.number="volume" />
    <HeaderRadioHost />
  </div>
</template>
