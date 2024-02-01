<script lang="ts" setup>
const player = ref()
const options = {
  src: 'https://drh-connect.dline-media.com/onair',
}
const { playing, volume } = useMediaControls(player, options)
const volumeLevel = ref(30)
volume.value = 0.3
watch(volumeLevel, () => (volume.value = volumeLevel.value / 100))
const onPlay = () => {
  playing.value = !playing.value
}
</script>

<template>
  <div class="flex items-center gap-x-4">
    <audio ref="player" />
    <button class="w-20 p-4 bg-sky-400 text-white" @click="onPlay">{{ playing ? 'Pause' : 'Play' }}</button>
    <input class="accent-orange-400" type="range" min="0" max="100" v-model.number="volumeLevel" />
  </div>
</template>

<style scoped></style>
