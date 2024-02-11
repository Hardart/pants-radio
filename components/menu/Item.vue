<script setup lang="ts">
defineProps<{
  menuItem: IMenuItem
  isChild?: boolean
}>()
const { toggleMenuState } = useMenu()
</script>

<template>
  <li class="relative py-1">
    <NuxtLink
      :to="menuItem.link"
      @click="toggleMenuState"
      :class="[isChild ? 'menu-item__child' : 'menu-item', $route.path.includes(menuItem.link + '/') && 'text-primary']"
      active-class="text-primary"
    >
      {{ menuItem.label }}</NuxtLink
    >
    <ul v-if="menuItem.childrens" class="w-full text-neutral-100 mt-4 space-y-2">
      <MenuItem v-for="child in menuItem.childrens" :menu-item="child" is-child />
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
