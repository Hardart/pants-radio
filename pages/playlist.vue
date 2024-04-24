<script setup lang="ts">
import type { API } from '~/types/api';
const {custom} = useDates()
const date = useState<Date>('archive-date', () => new Date())
const hour = useState('archive-hour', () => setHour())
const dateFilter = computed(() => custom(date.value).setHour(hour.value)
)
const { data } = await useFetch<API.ArchivePage>('/api/v1/track-archive', { query: { dateFilter} })
const response = toValue(data)
if (!response) throw createError('eerrrrr')
provide('archive', response.archive)
</script>

<template>
  {{ dateFilter }}
  <SectionsPlaylistMainInfo />
  <SectionsPlaylistDateSelect/>
  <SectionsPlaylistTrackList />
</template>
