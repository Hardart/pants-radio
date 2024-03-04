import type { TrackHistory } from '~/types/track'

export const useArchiveStore = defineStore('archive', () => {
  const { custom } = useDates()
  const tracks = ref<TrackHistory[]>([])
  const storeRefs = () => ({ tracks })
  const fetchTracks = async (date: Date, hour: string) => {
    const selectedDate = custom(date).setHour(hour)
    const data = await $fetch<TrackHistory[]>('/api/history', { method: 'post', body: { date: selectedDate } })
    tracks.value = data
  }
  return { storeRefs, fetchTracks, tracks }
})
