type MediaType = 'track' | 'radio'
export const useMediaStore = defineStore('media', () => {
  // STATE
  const fetching = ref(false)
  const mediaElement = ref<HTMLAudioElement | null>()
  const mediaSource = ref('')
  const playing = ref(false)
  const volume = ref(20)
  const mediaType = ref<MediaType>('radio')

  // GETTERS
  const isSourceEqual = (source: string) => mediaSource.value === source
  const isTrackPlaying = (source: string) => isSourceEqual(source) && playing.value

  // ACTIONS
  const togglePlaying = () => (playing.value = !playing.value)
  const playPauseMedia = () => (playing.value ? play() : pause())
  const play = async () => {
    if (mediaType.value === 'radio') fetching.value = true
    await mediaElement.value?.play()
    fetching.value = false
  }
  const pause = () => mediaElement.value?.pause()

  const resetMediaSource = async () => {
    await delay(10)
    mediaElement.value!.src = ''
    mediaSource.value = ''
  }
  const setMediaSource = (source: string) => {
    mediaSource.value = source
    mediaElement.value!.src = source
  }
  const onPlayPreview = async (source: string, type: MediaType) => {
    if (fetching.value) return
    mediaType.value = type
    if (isSourceEqual(source)) {
      togglePlaying()
      await delay(10)
      playPauseMedia()
      if (type === 'radio') resetMediaSource()
    } else {
      playing.value = false
      setMediaSource(source)

      togglePlaying()
      await delay(10)
      playPauseMedia()
    }
  }

  const initMediaElement = (element: Ref<HTMLAudioElement>) => {
    mediaElement.value = element.value
    mediaElement.value.volume = volume.value / 100
  }

  const storeRefs = () => ({ fetching, volume })

  watch(volume, () => (mediaElement.value!.volume = volume.value / 100))

  return { onPlayPreview, isSourceEqual, isTrackPlaying, initMediaElement, storeRefs }
})
