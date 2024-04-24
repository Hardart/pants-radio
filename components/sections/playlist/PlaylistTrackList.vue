<script setup lang='ts'>
import type { Track } from '~/types/track';

const tracks = inject<Track[]>('archive')
</script>
 
<template>
  <Section v-if="tracks" padding="small">
    <TrackList :tracks :show-date="true" />
  </Section>
</template>
 