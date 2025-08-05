<script setup lang="ts">
import type { User } from '~/types/user'

defineProps<{ host: User; showPosition?: boolean }>()
</script>

<template>
  <li class="flex flex-col overflow-clip rounded-md shadow-lg">
    <img
      v-if="host.avatar"
      :src="getImage600(host.avatar)"
      class="h-60 w-full object-cover"
      width="450"
      height="590"
      loading="lazy"
    />
    <div class="p-4">
      <h5 class="text-lg font-semibold">{{ host.fullName }}</h5>
      <p class="text-sm font-light" v-if="showPosition">{{ host.position.join(', ') }}</p>
    </div>
  </li>
</template>
