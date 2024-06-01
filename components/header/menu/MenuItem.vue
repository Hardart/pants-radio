<script setup lang="ts">
import type { MenuItem } from '~/types/menu'

defineProps<{
  menuItem: MenuItem
  isChild?: boolean
}>()
defineEmits(['toggleMenuState'])
</script>

<template>
  <li class="relative py-1" @click="$emit('toggleMenuState')">
    <NuxtLink
      :to="menuItem.to"
      :class="[isChild ? 'menu-item__child' : 'menu-item', $route.path.includes(menuItem.to + '/') && 'text-primary']"
      active-class="text-primary"
    >
      {{ menuItem.label }}
    </NuxtLink>
    <ul v-if="menuItem.childrens" class="mt-4 w-full space-y-2 text-neutral-100">
      <HeaderMenuItem v-for="child in menuItem.childrens" :menu-item="child" is-child />
    </ul>
  </li>
</template>

<style>
.menu-item {
  @apply text-3xl font-medium hover:text-primary;
}

.menu-item__child {
  @apply text-xl text-neutral-400 hover:text-primary;
}
</style>
