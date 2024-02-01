<script lang="ts" setup></script>

<template>
  <div class="flex items-center bg-white px-6 py-4 w-full rounded-lg drop-shadow-xl">
    <UiPlayButton />
    <TrackAlbumArt />
    <TrackInfo />
    <TrackTime :duration="21" :current-time="11" />
  </div>
</template>

<style scoped></style>
