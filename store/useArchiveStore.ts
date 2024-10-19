import type { API } from '~/types/api'
import type { Track } from '~/types/track'
import { hoursStartFrom } from '~/utils/setHour'

export const useArchiveStore = defineStore('archive', () => {
  const { custom } = useDates()

  const startHour = hoursStartFrom()
  const tracks = ref<Track[]>([])
  const date = ref<Date>(new Date())
  const hour = ref(startHour)
  const dateStartFrom = ref('')
  const isLoadingArchive = ref(false)

  watch(date, (curr, prev) => {
    if (!curr) date.value = prev
  })

  const today = computed(() => custom(date.value).setHourToIso(hour.value))

  const fetchArchive = async () => {
    try {
      isLoadingArchive.value = true
      const { archive, startFrom } = await $fetch<API.ArchivePage>('/api/v1/track-archive', {
        query: { dateFilter: today.value }
      })
      dateStartFrom.value = startFrom
      tracks.value = archive
    } catch (error) {
      if (error instanceof Error) showError(error)
      else throw error
    } finally {
      isLoadingArchive.value = false
    }
  }

  const storeRefs = () => {
    return { tracks, isLoadingArchive, date, hour, dateStartFrom }
  }

  watch([date, hour], fetchArchive)

  return { fetchArchive, storeRefs }
})
