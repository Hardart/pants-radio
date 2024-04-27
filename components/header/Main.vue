<script setup lang="ts">
const { isOpen, toggleMenuState } = useMenu()
const { mainMenu } = useMeta()

useHead({
  htmlAttrs: {
    class: computed(() => (isOpen.value ? 'overflow-clip' : ''))
  }
})
</script>

<template>
  <header class="fixed z-50 h-20 w-full bg-secondary">
    <div class="container mx-auto flex h-full w-full items-center">
      <Logo is-main />
      <HeaderRadio />

      <UiMenuButton @click="toggleMenuState" />
      <TransitionFade :duration="400">
        <div v-if="isOpen" class="fixed inset-0 z-10 bg-stone-500/60 backdrop-blur-sm max-lg:hidden"></div>
      </TransitionFade>
      <HeaderMenu :main-menu />
    </div>
  </header>
</template>
