<script setup lang="ts">
defineProps<{
  image?: string
  alt?: string
}>()
</script>

<template>
  <div class="relative overflow-hidden rounded-lg">
    <img
      v-if="image"
      :src="getImage600(image)"
      width="610"
      height="357"
      class="aspect-video w-full object-cover object-top"
      loading="lazy"
    />
    <div
      v-else
      class="flex min-h-44 w-full items-center justify-center rounded-xl bg-sky-500 font-bold uppercase tracking-widest text-white"
    >
      <div class="absolute">no image</div>
      <img src="/assets/placeholder.svg" width="610" height="357" class="aspect-video w-full" loading="lazy" />
    </div>
  </div>
</template>
