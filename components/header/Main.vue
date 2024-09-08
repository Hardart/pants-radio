<script setup lang="ts">
const { isMenuOpen, toggleMenuState } = useMenu()

useHead({
  htmlAttrs: {
    class: computed(() => (isMenuOpen.value ? 'overflow-clip' : ''))
  }
})
</script>

<template>
  <header class="fixed z-50 h-14 w-full bg-secondary md:h-20">
    <div class="container mx-auto flex h-full w-full items-center">
      <Logo is-main />
      <Radio class="hidden md:flex" />
      <UiMenuButton @click="toggleMenuState()" />
      <TransitionFade :duration="400">
        <div v-if="isMenuOpen" class="fixed inset-0 z-10 bg-stone-500/60 backdrop-blur-sm max-lg:hidden"></div>
      </TransitionFade>
      <HeaderMenu :is-menu-open @toggle-menu-state="toggleMenuState()" />
    </div>
  </header>
</template>
