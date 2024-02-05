<script lang="ts" setup>
defineProps<{
  artist: string
  title: string
}>()
</script>

<template>
  <div class="mx-2">
    <TrackArtistName :artist="artist" />
    <TrackTitle :title="title" />
  </div>
</template>

<style scoped></style>
