<script setup lang="ts">
import type { Slide } from '~/types/slide'
const slides = inject<Slide[]>('gallery')
</script>

<template>
  <Section padding="top">
    <UkSlideshow v-if="slides" :slides />
  </Section>
</template>
