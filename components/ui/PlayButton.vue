<script lang="ts" setup>
defineProps<{
  isPlayng?: boolean
}>()
</script>

<template>
  <div class="grid place-items-center w-14 h-14 bg-primary rounded-full cursor-pointer hover:shadow-md">
    <Icon v-if="!isPlayng" class="text-white cursor-pointer" name="material-symbols:play-circle-outline" size="34" />
    <Icon v-else class="text-white cursor-pointer" name="material-symbols:pause-circle-outline" size="34" />
  </div>
</template>

<style scoped></style>
