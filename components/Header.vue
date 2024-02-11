<script setup lang="ts">
const { isOpen, toggleMenuState } = useMenu()

useHead({
  htmlAttrs: {
    class: computed(() => (isOpen.value ? 'overflow-clip' : '')),
  },
})
const value = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max)
</script>

<template>
  <header class="fixed w-full h-20 bg-secondary z-50">
    <div class="flex items-center container mx-auto w-full h-full">
      <Logo :is-main="true" />
      <RadioPlayer />

      <UiMenuButton @click="toggleMenuState" />
      <TransitionFade :duration="400">
        <div v-if="isOpen" class="fixed inset-0 bg-stone-500/60 backdrop-blur-sm z-10 max-lg:hidden"></div>
      </TransitionFade>
      <Menu />
    </div>
  </header>
</template>
