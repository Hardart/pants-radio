<script setup lang="ts">
import type { User } from '~/types/user'

defineProps<{ host: User; showPosition?: boolean }>()
</script>

<template>
  <!-- <div class="grid overflow-clip rounded-md shadow-lg">
    <img v-if="host.avatar" :src="correctImageSrc(host.avatar)" class="h-60 w-full object-cover" loading="lazy" />
    <div class="p-4">
      <h5 class="text-xl font-semibold">{{ host.fullName }}</h5>
    </div>
  </div> -->
  <li class="flex flex-col overflow-clip rounded-md shadow-lg">
    <img
      v-if="host.avatar"
      :src="correctImageSrc(host.avatar)"
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
