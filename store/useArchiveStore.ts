import type { TrackHistory } from '~/types/track'

export const useArchiveStore = defineStore('archive', () => {
  const history = ref<TrackHistory[]>([])
  const tracks = computed(() => history.value)
  const storeRefs = () => ({ history })
  const fetchTracks = async (date: MaybeRef<Date>) => {
    const data = await $fetch<TrackHistory[]>('/api/history', { method: 'post', body: { date: toValue(date) } })
    history.value = data
  }
  return { storeRefs, fetchTracks, history, tracks }
})
