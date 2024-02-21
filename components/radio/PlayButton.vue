<script setup lang="ts">
defineProps<{
  isFetching: boolean
  playingRadio: boolean
}>()
defineEmits(['on-play'])
</script>

<template>
  <div class="mx-2 px-5 border-x border-neutral-500">
    <button class="w-14 h-14 grid place-items-center bg-primary text-white rounded-full" v-if="isFetching">
      <Icon name="svg-spinners:bars-scale-fade" size="24" />
    </button>
    <button class="w-14 h-14 grid place-items-center bg-primary text-white rounded-full" v-else>
      <Icon v-if="!playingRadio" size="34" name="material-symbols:play-circle-outline-rounded" />
      <Icon v-else size="37" name="material-symbols:pause-rounded" />
    </button>
  </div>
</template>

<style></style>
