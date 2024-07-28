<script setup lang="ts">
defineProps<{
  isFetching: boolean
  isPlaying: boolean
}>()
defineEmits(['on-play'])
</script>

<template>
  <div>
    <button class="grid size-14 place-items-center rounded-full bg-primary text-white" v-if="isFetching">
      <Icon name="svg-spinners:bars-scale-fade" size="24" />
    </button>
    <button class="grid size-14 place-items-center rounded-full bg-primary text-white" v-else>
      <Icon v-if="!isPlaying" size="34" name="material-symbols:play-circle-outline-rounded" />
      <Icon v-else size="37" name="material-symbols:pause-rounded" />
    </button>
  </div>
</template>
