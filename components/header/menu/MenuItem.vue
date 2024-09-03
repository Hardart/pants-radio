<script setup lang="ts">
import type { MenuItem } from '~/types/menu'

const props = defineProps<{
  menuItem: MenuItem
  isChild?: boolean
}>()
defineEmits(['toggleMenuState'])
const route = useRoute()
const isParent = computed(() => route.path.includes(props.menuItem.to + '/'))
</script>

<template>
  <li class="relative py-1" @click="$emit('toggleMenuState')">
    <NuxtLink
      :to="menuItem.to"
      :class="[isChild ? 'menu-item__child' : 'menu-item', isParent && 'text-primary']"
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
  @apply text-2xl font-medium hover:text-primary xl:text-3xl;
}

.menu-item__child:not(.text-primary) {
  @apply hover:text-primary-500 text-neutral-400 xl:text-lg;
}
</style>
