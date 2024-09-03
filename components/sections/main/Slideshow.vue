<script setup lang="ts">
import type { Slide } from '~/types/slide'
const slides = inject<Slide[]>('gallery')
</script>

<template>
  <Section padding="small" class="max-sm:!pb-0">
    <UkSlideshow v-if="slides" :slides />
  </Section>
</template>
