<script setup lang="ts">
defineProps<{
  host: { image?: string; name: string; position: string }
}>()
</script>

<template>
  <div class="grid text-center">
    <img v-if="host.image" :src="host.image" width="450" height="590" loading="lazy" />
    <h5 class="text-xl font-semibold mt-4">{{ host.name }}</h5>
    <p class="text-sm font-light">{{ host.position }}</p>
  </div>
</template>

<style></style>
