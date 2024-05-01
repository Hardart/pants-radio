<script setup lang="ts">
import type { API } from '~/types/api';
const { custom } = useDates()
const date = useState<Date>('archive-date', () => new Date())
const hour = useState('archive-hour', setHour)
const dateFilter = computed(() => custom(date.value).setHour(hour.value).toISOString())
const { data } = await useFetch<API.ArchivePage>('/api/v1/track-archive', { query: { dateFilter } })
</script>

<template>
  <SectionsPlaylistMainInfo />
  <SectionsPlaylistDateSelect/>
  <SectionsPlaylistTrackList v-if="data" :tracks="data.archive" />
</template>
