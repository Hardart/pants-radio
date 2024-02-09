<script lang="ts" setup>
const menuList = useState<IMenuItem[]>('menu-list')

const menu = ref()
const props = defineProps(['isOpen', 'toggle'])
onClickOutside(menu, event => {
  if (props.isOpen) props.toggle()
})
watch(
  () => props.isOpen,
  () => {
    if (props.isOpen) {
      menu.value.focus()
    }
  }
)
</script>

<template>
  <nav
    ref="menu"
    class="fixed flex flex-col top-0 left-0 right-0 max-lg:bottom-0 bg-neutral-800 transition-all focus-visible:outline-none will-change-transform overflow-hidden z-40"
    :class="isOpen ? 'translate-y-0 ease-out duration-500' : '-translate-y-full ease-in duration-300'"
    @keyup.esc="toggle"
    tabindex="0"
  >
    <MenuTop @toggle="toggle" />
    <MenuList v-if="menuList" class="my-10" :menu-items="menuList" @toggle="toggle" />
    <MenuAccordion :menu-list="menuList" />
    <MenuBottom />
  </nav>
</template>

<style></style>
