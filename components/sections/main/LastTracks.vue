<script setup lang="ts">
import type { IRadioData } from '~/types/track';

const trackList = inject<IRadioData[]>('last-tracks') 
</script>

<template>
  <Section padding="small">
    <SectionTitle title="Новинки Радио ШТАНЫ" />
    <TrackList :tracks="trackList" />
  </Section>
</template>
