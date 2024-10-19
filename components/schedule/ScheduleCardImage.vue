<script setup lang="ts">
defineProps<{
  imageSrc?: string
}>()
</script>

<template>
  <div class="h-14 w-14 shrink-0">
    <img
      v-if="imageSrc"
      class="size-full rounded-md object-cover"
      :src="correctImageSrc(imageSrc)"
      width="60"
      height="60"
      alt=""
    />
    <img class="rounded-md" v-else src="/assets/plug280x280.svg" width="60" height="60" alt="" />
  </div>
</template>
