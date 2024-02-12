<script setup lang="ts">
import type { Host } from '~/types/hosts'
defineProps<{ people: Host[] }>()
</script>

<template>
  <div class="grid grid-cols-2 gap-x-2 lg:grid-cols-5 lg:gap-x-10 gap-y-6">
    <TeamCard v-for="person in people" :person="person" />
  </div>
</template>

<style></style>
