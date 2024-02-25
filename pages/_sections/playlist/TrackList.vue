<script setup lang="ts">
defineProps<{ title?: string }>()
const { tracks } = storeToRefs(useArchiveStore())
</script>

<template>
  <Section v-if="tracks?.length" padding="small">
    <SectionTitle v-if="title" :title="title" />
    <TrackList :history="tracks" />
  </Section>
</template>
