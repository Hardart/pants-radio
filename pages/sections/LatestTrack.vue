<script setup lang="ts">
// const dateLimit = useState('date-limit')
const { limit = 20 } = defineProps<{
  limit?: number
  title?: string
}>()
const { data: tracks } = useAsyncData(() => $fetch('/api/track', { query: { limit } }))
</script>

<template>
  <Section v-if="tracks?.length" padding="small">
    <SectionTitle v-if="title" :title="title" />
    <TrackList :tracks="tracks" />
  </Section>
</template>

<style></style>
