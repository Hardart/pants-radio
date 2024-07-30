<script setup lang="ts">
import type { User } from '~/types/user'

defineProps<{
  host: User
  showPosition?: boolean
}>()
</script>

<template>
  <li class="grid rounded bg-white text-center drop-shadow-md">
    <img v-if="host.avatar" :src="correctImageSrc(host.avatar)" class="rounded" width="450" height="590" loading="lazy" />
    <div class="p-4">
      <h5 class="text-xl font-semibold">{{ host.fullName }}</h5>
      <p class="text-sm font-light" v-if="host.roles && host.roles.includes('host')">Ведущий</p>
      <p class="text-sm font-light" v-if="showPosition">{{ host.position.join(', ') }}</p>
    </div>
  </li>
</template>
