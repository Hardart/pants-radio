<script setup lang="ts">
const isOpen = ref(false)
const toggleMenuState = () => (isOpen.value = !isOpen.value)
useHead({
  htmlAttrs: {
    class: computed(() => (isOpen.value ? 'overflow-clip' : '')),
  },
})
</script>

<template>
  <div class="fixed w-full h-20 bg-secondary z-50">
    <div class="flex items-center container mx-auto h-full">
      <div class="min-w-16 ml-4">
        <Logo size="70" />
      </div>
      <TransitionFade :duration="400">
        <div v-if="isOpen" class="fixed inset-0 bg-stone-500/60 backdrop-blur-sm z-10 max-lg:hidden"></div>
      </TransitionFade>
      <Menu :is-open="isOpen" :toggle="toggleMenuState" />
      <RadioPlayer />
      <UiMenuButton @click="toggleMenuState" />
    </div>
  </div>
</template>

<style></style>
