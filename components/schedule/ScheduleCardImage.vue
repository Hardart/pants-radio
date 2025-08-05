<script setup lang="ts">
defineProps<{
  imageSrc?: string
}>()
</script>

<template>
  <div class="size-10 shrink-0 max-sm:order-first sm:size-14">
    <img v-if="imageSrc" class="size-full rounded-md object-cover" :src="getImage100(imageSrc)" width="60" height="60" />
    <img v-else class="rounded-md" src="/assets/plug280x280.svg" width="60" height="60" />
  </div>
</template>
