import type { ITrackData } from '~/components/track/Track.vue'
const level = ref(5)
const activeTrackId = ref(-1)
const trackUrl = ref('')
const radioData = { id: -2, link: 'http://87.251.66.75:56565/rshstream' }

export const useTrackData = (audioElement: Ref<HTMLMediaElement | null>) => {
  const { playing, volume } = useMediaControls(audioElement, { src: trackUrl })
  const isRadioPlayig = computed(() => activeTrackId.value === radioData.id)

  const togglePlayState = async (trackData: ITrackData, isRadio: boolean = false) => {
    if (isRadio) {
      if (trackUrl.value === radioData.link) {
        playing.value = !playing.value
        activeTrackId.value = !playing.value ? -1 : radioData.id
      } else {
        activeTrackId.value = radioData.id
        trackUrl.value = radioData.link
        playing.value = false
        await delay(10)
        playing.value = true
      }
    } else {
      if (trackUrl.value === trackData.link) {
        playing.value = !playing.value
        activeTrackId.value = !playing.value ? -1 : trackData.id
      } else {
        activeTrackId.value = trackData.id
        trackUrl.value = trackData.link
        playing.value = false
        await delay(10)
        playing.value = true
      }
    }
  }

  watch(level, () => (volume.value = level.value / 100), { immediate: true })
  return { level, togglePlayState, activeTrackId, isRadioPlayig }
}
