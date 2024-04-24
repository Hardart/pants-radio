<script setup lang='ts'>
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
    :src="addDevPort(image, '3070')"
    width="610"
    height="357"
    class="aspect-video object-top object-cover"
    alt=""
    loading="lazy"
  />
  <div
    v-else
    class="bg-sky-500 w-full min-h-44 flex justify-center items-center uppercase font-bold tracking-widest text-white rounded-xl"
  >
    <div class="absolute">no image</div>
      <img src="/images/placeholder.svg" width="610" height="357" class="aspect-video" loading="lazy" :alt />
    </div>
  <!-- <div class="bg-stone-500/30 group-hover:bg-transparent transition-colors absolute inset-0 rounded-xl"></div> -->
</div>
</template>
 
<style></style>