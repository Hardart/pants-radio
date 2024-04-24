<script setup lang='ts'>
import type { Track } from '~/types/track';

defineProps<{
  tracks: Track[]
}>()
</script>
 
<template>
  <Section v-if="tracks" padding="small">
    <TrackList :tracks :show-date="true" />
  </Section>
</template>
 