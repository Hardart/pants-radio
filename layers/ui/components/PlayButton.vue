<script lang="ts" setup>
defineProps<{
  isPlaying?: boolean
}>()
</script>

<template>
  <div class="grid size-14 cursor-pointer place-items-center rounded-full bg-primary hover:shadow-md">
    <Icon v-if="!isPlaying" class="cursor-pointer text-white" name="material-symbols:play-circle-outline" size="34" />
    <Icon v-else class="cursor-pointer text-white" name="material-symbols:pause-circle-outline" size="34" />
  </div>
</template>

<style scoped></style>
