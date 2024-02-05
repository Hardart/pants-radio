<script setup lang="ts">
defineProps<{
  person: { image?: string; name: string; position: string }
}>()
</script>

<template>
  <div class="grid text-center">
    <img v-if="person.image" :src="person.image" width="450" height="590" loading="lazy" />
    <h5 class="text-xl font-semibold mt-4">{{ person.name }}</h5>
    <p class="text-sm font-light">{{ person.position }}</p>
  </div>
</template>

<style></style>
