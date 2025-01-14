<script setup lang="ts">
import type { MenuItem } from '~/types/menu'

defineProps<{ menuItems: MenuItem[] }>()
defineEmits(['toggleMenuState'])
</script>

<template>
  <div class="container mx-auto hidden lg:block">
    <ul class="mb-4 grid w-full text-neutral-100 max-lg:gap-y-8 max-lg:px-8 lg:grid-cols-3 lg:justify-items-center">
      <HeaderMenuItem v-for="item in menuItems" :menu-item="item" @toggle-menu-state="$emit('toggleMenuState')" />
    </ul>
  </div>
</template>

<style></style>
