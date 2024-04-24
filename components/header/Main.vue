<script setup lang="ts">
const { isOpen, toggleMenuState } = useMenu()
const { mainMenu } = useMeta()
useHead({
  htmlAttrs: {
    class: computed(() => (isOpen.value ? 'overflow-clip' : '')),
  },
})
</script>

<template>
  <header class="fixed w-full h-20 bg-secondary z-50">
    <div class="flex items-center container mx-auto w-full h-full">
      <Logo is-main />
      <HeaderRadio />

      <UiMenuButton @click="toggleMenuState" />
      <TransitionFade :duration="400">
        <div v-if="isOpen" class="fixed inset-0 bg-stone-500/60 backdrop-blur-sm z-10 max-lg:hidden"></div>
      </TransitionFade>
      <HeaderMenu :main-menu="mainMenu" />
    </div>
  </header>
</template>
