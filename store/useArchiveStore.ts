import type { API } from '~/types/api'
import type { Track } from '~/types/track'
import { hoursStartFrom } from '~/utils/setHour'

export const useArchiveStore = defineStore('archive', () => {
  const { custom } = useDates()

  const startHour = hoursStartFrom()
  const date = ref<Date>(new Date())
  const hour = ref(startHour)

  watch(date, (curr, prev) => {
    if (!curr) date.value = prev
  })

  const today = computed(() => custom(date.value).setHourToIso(hour.value))

  const fetchArchiveTracks = async () => {
    return await $fetch<API.ArchivePage>('/api/v1/track-archive', {
      query: { dateFilter: today.value }
    })
  }

  return { fetchArchiveTracks, date, hour }
})
