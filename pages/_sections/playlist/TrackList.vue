<script setup lang="ts">
const { history, tracks } = storeToRefs(useArchiveStore())
defineProps<{ title?: string }>()
</script>

<template>
  <Section v-if="tracks?.length" padding="small">
    <SectionTitle v-if="title" :title="title" />
    <TrackList :history="tracks" />
  </Section>
</template>
