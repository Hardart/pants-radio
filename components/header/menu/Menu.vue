<script lang="ts" setup>
import type { MenuItem } from '~/types/menu'

const props = defineProps<{ mainMenu: MenuItem[]; isOpenMainMenu: boolean }>()
const emit = defineEmits(['toggleMenuState'])
const menu = ref()

onClickOutside(menu, () => {
  if (props.isOpenMainMenu) emit('toggleMenuState')
})

watch(
  () => props.isOpenMainMenu,
  () => {
    if (props.isOpenMainMenu) {
      menu.value.focus()
    }
  }
)
</script>

<template>
  <nav
    ref="menu"
    class="fixed left-0 right-0 top-0 z-40 flex flex-col overflow-hidden bg-neutral-800 transition-all will-change-transform focus-visible:outline-none max-lg:bottom-0"
    :class="isOpenMainMenu ? 'translate-y-0 duration-500 ease-out' : '-translate-y-full duration-300 ease-in'"
    @keyup.esc="$emit('toggleMenuState')"
    tabindex="0"
  >
    <HeaderMenuTop @toggle-menu-state="$emit('toggleMenuState')" />
    <HeaderMenuItemList class="my-10" :menu-items="mainMenu" @toggle-menu-state="$emit('toggleMenuState')" />
    <HeaderMenuMobile :menu-list="mainMenu" />
    <HeaderMenuBottom />
  </nav>
</template>

<style></style>
