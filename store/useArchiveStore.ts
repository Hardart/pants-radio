import type { TrackHistory } from '~/types/track'

export const useArchiveStore = defineStore('archive', () => {
  const { custom } = useDates()

  const date = ref(new Date())
  const hour = ref(setHour())

  const tracks = ref<TrackHistory[]>([])
  

  const fetchTracks = async (date: Date, hour: string) => {
    const selectedDate = custom(date).setHour(hour)
    const data = await $fetch<TrackHistory[]>('/api/history', { method: 'post', body: { date: selectedDate } })
    tracks.value = data
  }

  const storeRefs = () => ({ tracks })
  return { storeRefs, fetchTracks, tracks }
})
