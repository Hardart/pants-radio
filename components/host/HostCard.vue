<script setup lang="ts">
import type { User } from '~/types/user';

defineProps<{
  host: User
}>()
</script>

<template>
  <div class="grid text-center">
    <img v-if="host.avatar" :src="host.avatar" width="450" height="590" loading="lazy" />
    <h5 class="text-xl font-semibold mt-4">{{ host.fullName }}</h5>
    <p class="text-sm font-light" v-if="host.roles && host.roles.includes('host')">Ведущий</p>
    <p class="text-sm font-light">{{ host.position }}</p>
  </div>
</template>

<style></style>
