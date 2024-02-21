<script setup lang="ts">
const { data: tracks } = useAsyncData(() => $fetch('/api/track'))
</script>

<template>
  <Section v-if="tracks?.length">
    <TrackList :tracks="tracks" />
  </Section>
</template>

<style></style>
