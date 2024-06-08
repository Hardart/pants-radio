<script setup lang="ts">
import type { User } from '~/types/user'

defineProps<{
  host: User
}>()
</script>

<template>
  <div class="grid overflow-clip rounded-md shadow-lg">
    <img v-if="host.avatar" :src="correctImageSrc(host.avatar)" class="h-60 w-full object-cover" loading="lazy" />
    <div class="p-4">
      <h5 class="text-xl font-semibold">{{ host.fullName }}</h5>
      <p class="text-sm font-light">Шоу тайм</p>
    </div>
  </div>
</template>
