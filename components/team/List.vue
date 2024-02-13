<script setup lang="ts">
import type { Host } from '~/types/hosts'
defineProps<{ people: Host[] }>()
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 sm:gap-x-4 lg:gap-x-10 gap-y-6">
    <TeamCard v-for="person in people" :person="person" />
  </div>
</template>

<style></style>
