<script lang="ts" setup>
const player = ref()
const { $ws } = useNuxtApp()
const { initRadio, onRadioPlay } = useTracksStore()
const { playingRadio, volume, isFetching } = initRadio(player)
const { isDesktop } = useDevice()
onMounted(onSocketConnect)

const jingleData: IRadioData = {
  artistName: 'Радио Штаны',
  trackTitle: '',
  covers: {
    art30: '/images/simple_logo.svg',
    art60: '/images/simple_logo.svg',
    art100: '/images/simple_logo.svg',
  },
}
const trackData = ref<IRadioData>(jingleData)
const socket = ref()
function onSocketConnect() {
  socket.value = $ws(3068, null)
  socket.value.on('radio:track', (data: IRadioData) => {
    trackData.value = data
  })
  socket.value.on('radio:jingle', (data: IRadioData) => {
    trackData.value = data
  })
}

const onPlay = () => {
  socket.value?.emit('radio:play')
  onRadioPlay()
}
</script>

<template>
  <div class="flex items-center w-full gap-x-4 mx-4">
    <audio ref="player" preload="none" />
    <RadioPlayButton :is-fetching="isFetching" :playing-radio="playingRadio" :on-play="onPlay" />
    <RadioArt :src="trackData?.covers.art60" />
    <RadioTrackInfo :artist-name="trackData?.artistName" :track-title="trackData?.trackTitle" class="max-sm:hidden" />
    <div v-if="isDesktop" class="flex items-center ml-auto">
      <input class="accent-primary" type="range" min="0" max="100" v-model.number="volume" />
    </div>
  </div>
</template>

<style scoped></style>
