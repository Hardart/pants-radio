<script lang="ts" setup>
const menuList = useState<IMenuItem[]>('menu-list')
const { isOpen, toggleMenuState } = useMenu()
const menu = ref()

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
    <MenuTop />
    <MenuList v-if="menuList" class="my-10" :menu-items="menuList" />
    <MenuMobile :menu-list="menuList" />
    <MenuBottom />
  </nav>
</template>

<style></style>
