<script setup lang="ts">
import type { User } from '~/types/user'
defineProps<{ hosts: User[]; v: 1 | 2; showPosition?: boolean }>()
</script>

<template>
  <div class="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4 lg:gap-8 xl:grid-cols-6">
    <HostCard v-if="v === 1" v-for="host in hosts" :host />
    <HostCardV2 v-if="v === 2" v-for="host in hosts" :host :show-position />
  </div>
</template>
