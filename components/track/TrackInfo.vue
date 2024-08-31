<script lang="ts" setup>
defineProps<{
  artist: string
  title: string
}>()
</script>

<template>
  <div class="flex-grow max-sm:my-1">
    <TrackArtist :artist />
    <TrackTitle :title />
  </div>
</template>
