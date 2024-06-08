<script setup lang="ts">
import type { User } from '~/types/user'

defineProps<{
  host: User
}>()
</script>

<template>
  <li class="grid text-center">
    <img v-if="host.avatar" :src="correctImageSrc(host.avatar)" width="450" height="590" loading="lazy" />
    <h5 class="mt-4 text-xl font-semibold">{{ host.fullName }}</h5>
    <p class="text-sm font-light" v-if="host.roles && host.roles.includes('host')">Ведущий</p>
    <p class="text-sm font-light">{{ host.position }}</p>
  </li>
</template>
