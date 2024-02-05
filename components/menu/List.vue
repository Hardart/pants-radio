<script setup lang="ts">
defineProps<{
  menuItems: IMenuItem[]
}>()
defineEmits(['toggle'])
</script>

<template>
  <ul class="flex justify-around w-full text-neutral-100 my-10">
    <MenuItem v-for="item in menuItems" :menu-item="item" @toggle="$emit('toggle')" />
  </ul>
</template>

<style></style>
