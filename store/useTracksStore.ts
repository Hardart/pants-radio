export const useTracksStore = defineStore('track', () => {
  // STATE
  const radioURL_old = 'https://drh-connect.dline-media.com/onair'
  const radioURL = 'https://stream.lolamedia.ru/rsh_federal'
  const trackUrl = ref('')
  const activeTrackId = ref(-1)
  const playingRadio = ref(false)
  const playingTrack = ref(false)
  const volume = ref(20)
  const isFetching = ref(false)
  const radioElement = ref<HTMLAudioElement | null>()

  // GETTERS
  const radioElementIsNULL = computed(() => radioElement.value === null && typeof radioElement.value === 'undefined')
  // ACTIONS
  async function onPlay(track: ITrackData) {
    playingRadio.value = false
    if (activeTrackId.value == track.id) {
      playingTrack.value = !playingTrack.value
      activeTrackId.value = !playingTrack.value ? -1 : track.id
    } else {
      activeTrackId.value = track.id
      trackUrl.value = track.link
      playingTrack.value = false
      await delay(10)
      playingTrack.value = true
    }
  }

  function initTrack(audioElement: Ref<HTMLAudioElement>) {
    onMounted(() => {
      audioElement.value.volume = volume.value / 100
      audioElement.value.onloadeddata = () => console.log('loaded')
      audioElement.value.onerror = () => console.error('error')
    })

    watch(playingTrack, () => {
      audioElement.value[playingTrack.value ? 'play' : 'pause']()
      if (playingTrack.value) return
    })

    watch(trackUrl, () => {
      audioElement.value.src = trackUrl.value
    })
  }

  function initRadio() {
    onMounted(() => {
      if (!radioElement.value) return
      radioElement.value.src = radioURL
      radioElement.value.volume = volume.value / 100
    })

    watch(playingRadio, onPlayingRadio)
    watch(volume, () => {
      if (!radioElement.value) return
      radioElement.value.volume = volume.value / 100
    })
    return { playingRadio, volume, isFetching, radioElement }
  }

  function stopTrack() {
    playingTrack.value = false
    activeTrackId.value = -1
  }

  async function onPlayingRadio() {
    if (!radioElement.value) return
    if (playingRadio.value) {
      await tryPlayRadio()
    } else {
      radioElement.value.pause()
      await delay(250)
      radioElement.value.src = ''
      radioElement.value.src = radioURL
    }
  }

  async function tryPlayRadio() {
    if (!radioElement.value) return
    try {
      stopTrack()
      isFetching.value = true
      await radioElement.value.play()
      isFetching.value = false
    } catch (error) {
      console.log(error)
      isFetching.value = false
      playingRadio.value = false
    }
  }
  function toggleRadioPlayState() {
    playingRadio.value = !playingRadio.value
  }

  return { initRadio, initTrack, toggleRadioPlayState, onPlay, trackUrl, activeTrackId, volume }
})
