<script setup lang="ts">
defineProps<{
  menuItem: IMenuItem
}>()
defineEmits(['toggle'])
</script>

<template>
  <li class="relative px-2 py-1">
    <NuxtLink
      :to="menuItem.link"
      @click="$emit('toggle')"
      class="text-3xl font-medium hover:text-primary"
      active-class="text-primary"
      :class="$route.path.includes(menuItem.link + '/') && 'text-primary'"
    >
      {{ menuItem.label }}</NuxtLink
    >
    <ul v-if="menuItem.childrens" class="w-full text-neutral-100 mt-4 space-y-2">
      <li v-for="child in menuItem.childrens">
        <NuxtLink
          :to="child.link"
          @click="$emit('toggle')"
          active-class="text-orange-300"
          class="text-xl text-neutral-400 hover:text-primary"
          >{{ child.label }}</NuxtLink
        >
      </li>
    </ul>
  </li>
</template>

<style></style>
