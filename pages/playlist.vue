<script setup lang="ts">
import type { API } from '~/types/api'
const { custom } = useDates()

const date = useState('archive:date', () => new Date())
const hour = useState('archive:hour', setHour)
watch(date, (curr, prev) => {
  if (!curr) date.value = prev
})
const dateFilter = computed(() => custom(date.value).setHour(hour.value).toISOString())
const { data } = await useFetch<API.ArchivePage>('/api/v1/track-archive', { query: { dateFilter } })
const res = toValue(data)
if (!res) throw createError('fetch errror at playlist page')
useState('archive:start', () => res.startFrom)
</script>

<template>
  <SectionsPlaylistMainInfo />
  <SectionsPlaylistDateSelect />
  <SectionsPlaylistTrackList v-if="data" :tracks="data.archive" />
  <SectionsPlaylistPlaybackInfo class="md:hidden" />
</template>
