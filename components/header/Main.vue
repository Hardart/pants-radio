<script setup lang="ts">
const [isOpenMainMenu, toggleMainMenuState] = useToggle()
const { mainMenu } = useMeta()

useHead({
  htmlAttrs: {
    class: computed(() => (isOpenMainMenu.value ? 'overflow-clip' : ''))
  }
})
</script>

<template>
  <header class="fixed z-50 h-20 w-full bg-secondary">
    <div class="container mx-auto flex h-full w-full items-center">
      <Logo is-main />
      <Radio />

      <UiMenuButton @click="toggleMainMenuState()" />
      <TransitionFade :duration="400">
        <div v-if="isOpenMainMenu" class="fixed inset-0 z-10 bg-stone-500/60 backdrop-blur-sm max-lg:hidden"></div>
      </TransitionFade>
      <HeaderMenu :main-menu :is-open-main-menu @toggle-menu-state="toggleMainMenuState(false)" />
    </div>
  </header>
</template>
