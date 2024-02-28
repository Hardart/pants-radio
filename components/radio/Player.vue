<script lang="ts" setup>
import type { IRadioData } from '~/types/track'

const jingleData: IRadioData = {
  artistName: 'Радио Штаны',
  trackTitle: 'Прямой эфир',
  cover: '/images/simple_logo.svg',
  preview: '',
}
const trackData = ref<IRadioData>(jingleData)
const radioURL = 'https://stream.lolamedia.ru/rsh_federal'
const radioElement = ref()
const { initMediaElement, isTrackPlaying, onPlayPreview, storeRefs } = useMediaStore()
const { fetching, volume } = storeRefs()

const { onSocketConnect } = useSocket(trackData)
onMounted(() => {
  onSocketConnect()
  initMediaElement(radioElement)
})
</script>

<template>
  <div class="flex items-center flex-grow gap-x-4 mx-4">
    <audio class="sr-only" ref="radioElement" preload="none" />
    <RadioPlayButton :is-fetching="fetching" :playing-radio="isTrackPlaying(radioURL)" @click="onPlayPreview(radioURL, 'radio')" />
    <RadioArt :src="trackData?.cover" />
    <RadioTrackInfo :artist-name="trackData?.artistName" :track-title="trackData?.trackTitle" class="max-sm:hidden" />
    <HeaderPlayerVolume v-model:volume.number="volume" />
  </div>
</template>

<style scoped></style>
