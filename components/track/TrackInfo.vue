<script lang="ts" setup>
defineProps<{
  artist: string
  title: string
}>()
</script>

<template>
  <div class="flex-grow mx-2">
    <TrackArtist :artist />
    <TrackTitle :title />
  </div>
</template>


