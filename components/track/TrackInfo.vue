<script lang="ts" setup>
defineProps<{
  artist: string
  title: string
}>()
</script>

<template>
  <div class="flex-1 max-md:my-1">
    <TrackArtist :artist />
    <TrackTitle :title />
  </div>
</template>
