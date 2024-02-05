<script setup lang="ts">
const menuElem = ref(null)
const isOpen = ref(false)
const toggleMenuState = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <div class="fixed w-full h-20 bg-secondary z-50">
    <div class="flex items-center container mx-auto h-full">
      <Logo size="70" />
      <Menu ref="menuElem" :is-open="isOpen" :toggle="toggleMenuState" />
      <RadioPlayer />
      <!-- <Time /> -->
      <UiMenuButton @click="toggleMenuState" />
    </div>
  </div>
</template>

<style></style>
