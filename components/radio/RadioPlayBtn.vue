<script setup lang="ts">
defineProps<{
  isFetching: boolean
  isPlaying: boolean
  isProhibited?: boolean
}>()
defineEmits(['on-play'])
</script>

<template>
  <div class="max-md:absolute">
    <button
      class="grid size-10 place-items-center rounded-full text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] md:size-14"
      :class="isProhibited ? 'md:bg-neutral-400/40' : 'md:bg-primary'"
    >
      <Icon v-if="isProhibited" name="material-symbols:play-disabled-rounded" size="32" />
      <Icon v-else-if="isFetching" name="svg-spinners:bars-scale-fade" size="24" />
      <Icon v-else-if="!isPlaying" size="36" name="material-symbols:play-circle-outline-rounded" />
      <Icon v-else size="37" name="material-symbols:pause-rounded" />
    </button>
  </div>
</template>
