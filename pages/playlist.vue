<script setup lang="ts">
import type { API } from '~/types/api';

const { data } = await useFetch<API.ArchivePage>('/api/v1/track-archive')
const response = toValue(data)
if (!response) throw createError('eerrrrr')
provide('archive', response.archive)
</script>

<template>
  <SectionsPlaylistMainInfo />
  <SectionsPlaylistTrackList />
</template>
