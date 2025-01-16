type MediaType = 'track' | 'radio'
export const useMediaStore = defineStore('media', () => {
  // STATE
  const ELEMENT_IS_NOT_DEFINED_ERROR = 'Media element is not defined in Media Store'
  const VOLUME_DIVIDER = 100
  const fetching = ref(false)
  const mediaElement = ref<HTMLAudioElement | null>()
  const mediaSource = ref('')
  const isMediaPlaying = ref(false)
  const volume = ref(20)
  const mediaType = ref<MediaType>('radio')
  const { currentTime, duration } = useMediaControls(mediaElement, { src: mediaSource })

  // GETTERS
  const isSourceEqual = (source: string) => mediaSource.value === source
  const isTrackPlaying = (source: string) => isSourceEqual(source) && isMediaPlaying.value
  const isTrackFetching = (source: string) => isSourceEqual(source) && fetching.value

  // ACTIONS
  const togglePlaying = () => (isMediaPlaying.value = !isMediaPlaying.value)
  const togglePlayPause = async () => {
    await delay(0)
    isMediaPlaying.value ? pause() : play()
  }

  const play = async () => {
    if (!mediaElement.value) throw createError(ELEMENT_IS_NOT_DEFINED_ERROR)
    if (!mediaSource.value) return useToast().add({ title: 'Нет возможности прослушать этот трек' })
    fetching.value = true
    const timerId = setTimeout(resetMediaSource, 7000)
    try {
      await mediaElement.value.play()
      initVolume()
      togglePlaying()
    } catch (error) {
      useToast().add({ title: 'Что-то пошло не так, пожалуйста перезагрузите страницу' })
    } finally {
      clearTimeout(timerId)
      fetching.value = false
    }
  }

  const pause = () => {
    if (!mediaElement.value) throw createError(ELEMENT_IS_NOT_DEFINED_ERROR)
    mediaElement.value.pause()
    togglePlaying()
  }

  const resetMediaSource = async () => {
    if (!mediaElement.value) throw createError(ELEMENT_IS_NOT_DEFINED_ERROR)
    await delay(10)
    mediaElement.value.src = ''
    mediaSource.value = ''
  }

  const setMediaSource = (source: string) => {
    if (!mediaElement.value) throw createError(ELEMENT_IS_NOT_DEFINED_ERROR)
    mediaSource.value = source
    mediaElement.value.src = source
  }

  const onPlayPreview = async (source: string, type: MediaType) => {
    if (fetching.value) return
    mediaType.value = type
    if (isSourceEqual(source)) {
      await togglePlayPause()
      if (type === 'radio') resetMediaSource()
    } else {
      isMediaPlaying.value = false
      setMediaSource(source)
      await togglePlayPause()
    }
  }

  const initMediaElement = (element: Ref<HTMLAudioElement>) => {
    mediaElement.value = element.value
    mediaElement.value.volume = volume.value / VOLUME_DIVIDER
  }

  const initVolume = () => {
    if (!mediaElement.value) throw createError(ELEMENT_IS_NOT_DEFINED_ERROR)
    mediaElement.value.volume = volume.value / VOLUME_DIVIDER
  }

  const storeRefs = () => ({ fetching, volume })

  watch(volume, initVolume)

  watch(currentTime, async () => {
    if (mediaType.value === 'radio') return
    if (Math.ceil(currentTime.value) === Math.ceil(duration.value)) {
      await togglePlayPause()
      currentTime.value = 0
    }
  })

  return { onPlayPreview, isSourceEqual, isTrackPlaying, initMediaElement, storeRefs, isTrackFetching }
})
