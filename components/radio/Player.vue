<script lang="ts" setup>
import type { IRadioData } from '~/types/track'

const jingleData: IRadioData = {
  artistName: 'Радио Штаны',
  trackTitle: 'Прямой эфир',
  covers: {
    art60: '/images/simple_logo.svg',
    art600: '/images/simple_logo.svg',
  },
}
const trackData = ref<IRadioData>(jingleData)
const { initRadio, toggleRadioPlayState } = useTracksStore()
const { playingRadio, volume, isFetching, radioElement } = initRadio()
const { isDesktop } = useDevice()
const { onSocketConnect } = useSocket(trackData)
onMounted(onSocketConnect)
</script>

<template>
  <div class="flex items-center flex-grow gap-x-4 mx-4">
    <audio ref="radioElement" preload="none" />
    <RadioPlayButton :is-fetching="isFetching" :playing-radio="playingRadio" :on-play="toggleRadioPlayState" />
    <RadioArt :src="trackData?.covers.art60" />
    <RadioTrackInfo :artist-name="trackData?.artistName" :track-title="trackData?.trackTitle" class="max-sm:hidden" />
    <div v-if="isDesktop" class="flex items-center flex-shrink ml-auto">
      <input class="accent-primary" type="range" min="0" max="100" v-model.number="volume" />
    </div>
  </div>
</template>

<style scoped></style>
