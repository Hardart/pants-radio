export const useTracksStore = defineStore('track', () => {
  // STATE
  const radioURL_old = 'https://drh-connect.dline-media.com/onair'
  const radioURL_test = 'http://87.251.66.75:56565/rshstrea'
  const radioURL = 'http://87.251.66.75:56565/rshstream'
  const trackUrl = ref('')
  const activeTrackId = ref(-1)
  const playingRadio = ref(false)
  const playingTrack = ref(false)
  const volume = ref(20)
  const isFetching = ref(false)

  // GETTERS
  // const isRadioPlaying = computed(() => playingType.value === 'radio')

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
      audioElement.value.src = ''
      audioElement.value.src = radioURL_old
    })

    watch(trackUrl, () => {
      audioElement.value.src = trackUrl.value
    })
  }

  function initRadio(audioElement: Ref<HTMLAudioElement>) {
    onMounted(() => {
      audioElement.value.src = radioURL_old
      audioElement.value.volume = volume.value / 100
    })

    watch(playingRadio, async () => {
      if (playingRadio.value) {
        try {
          isFetching.value = true
          await audioElement.value.play()
          isFetching.value = false
        } catch (error) {
          console.log(error)
          isFetching.value = false
          playingRadio.value = false
        }

        playingTrack.value = false
        activeTrackId.value = -1
      } else {
        audioElement.value.pause()
        audioElement.value.currentTime = 0
        setTimeout(() => {
          audioElement.value.src = ''
          audioElement.value.src = radioURL_old
        }, 250)
      }
    })
    watch(volume, () => {
      audioElement.value.volume = volume.value / 100
    })
    return { playingRadio, volume, isFetching }
  }

  function onRadioPlay() {
    playingRadio.value = !playingRadio.value
  }

  return { initRadio, initTrack, onRadioPlay, onPlay, trackUrl, activeTrackId, volume }
})
