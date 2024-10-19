<script setup lang="ts">
import type { API } from '~/types/api'
const archiveStore = useArchiveStore()
const { date, hour } = storeToRefs(archiveStore)
const { data, pending } = useLazyAsyncData<API.ArchivePage>('/api/v1/track-archive', () => archiveStore.fetchArchiveTracks(), {
  watch: [date, hour]
})
</script>

<template>
  <SectionsPlaylistMainInfo />
  <SectionsPlaylistDateSelect v-model="date" v-model:hour="hour" :start-from="data?.startFrom" />
  <SectionsPlaylistSkeletonList v-if="pending" />
  <SectionsPlaylistTrackList v-else-if="data" :tracks="data.archive" />
  <SectionsPlaylistPlaybackInfo class="md:hidden" />
</template>
