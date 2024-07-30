<script setup lang="ts">
import type { Slide } from '~/types/slide'
const slides = inject<Slide[]>('gallery')
</script>

<template>
  <Section>
    <UkSlideshow v-if="slides" :slides />
  </Section>
</template>
