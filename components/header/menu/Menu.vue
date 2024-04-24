<script lang="ts" setup>
import type { MenuItem } from '~/types/menu';

defineProps<{
  mainMenu: MenuItem[]
}>()
const menu = ref()
const { isOpen, toggleMenuState } = useMenu()

onClickOutside(menu, event => {
  if (isOpen.value) toggleMenuState()
})

watch(isOpen, () => {
  if (isOpen.value) {
    menu.value.focus()
  }
})
</script>

<template>
  <nav
    ref="menu"
    class="fixed flex flex-col top-0 left-0 right-0 max-lg:bottom-0 bg-neutral-800 transition-all focus-visible:outline-none will-change-transform overflow-hidden z-40"
    :class="isOpen ? 'translate-y-0 ease-out duration-500' : '-translate-y-full ease-in duration-300'"
    @keyup.esc="toggleMenuState"
    tabindex="0"
  >
    <HeaderMenuTop />
    <HeaderMenuItemList class="my-10" :menu-items="mainMenu" />
    <HeaderMenuMobile :menu-list="mainMenu" />
    <HeaderMenuBottom />
  </nav>
</template>

<style></style>
