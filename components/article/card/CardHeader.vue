<script setup lang="ts">
import { addDevPort } from '~/utils/parseArticle'
defineProps<{
  image?: string
  alt?: string
}>()
</script>

<template>
  <div class="relative overflow-hidden rounded-lg">
    <img
      v-if="image"
      :src="correctImageSrc(image)"
      width="610"
      height="357"
      class="aspect-video object-cover object-top"
      alt=""
      loading="lazy"
    />
    <div
      v-else
      class="flex min-h-44 w-full items-center justify-center rounded-xl bg-sky-500 font-bold uppercase tracking-widest text-white"
    >
      <div class="absolute">no image</div>
      <img src="/assets/placeholder.svg" width="610" height="357" class="aspect-video" loading="lazy" :alt />
    </div>
    <!-- <div class="bg-stone-500/30 group-hover:bg-transparent transition-colors absolute inset-0 rounded-xl"></div> -->
  </div>
</template>

<style></style>
