<script setup lang="ts">
defineProps<{
  menuItem: IMenuItem
  isChild?: boolean
}>()
defineEmits(['toggle'])
</script>

<template>
  <li class="relative py-1">
    <NuxtLink
      :to="menuItem.link"
      @click="$emit('toggle')"
      :class="[
        !isChild ? 'text-3xl font-medium hover:text-primary' : 'text-xl text-neutral-400 hover:text-primary',
        $route.path.includes(menuItem.link + '/') && 'text-primary',
      ]"
      active-class="text-primary"
    >
      {{ menuItem.label }}</NuxtLink
    >
    <ul v-if="menuItem.childrens" class="w-full text-neutral-100 mt-4 space-y-2">
      <MenuItem v-for="child in menuItem.childrens" :menu-item="child" is-child @toggle="$emit('toggle')" />
    </ul>
  </li>
</template>
