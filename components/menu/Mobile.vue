<script lang="ts" setup>
const menuList = useState<IMenuItem[]>('menu-list')
const menu = ref()
defineProps(['isOpen', 'toggle'])
</script>

<template>
  <nav
    ref="menu"
    class="fixed flex flex-col h-full top-0 left-0 right-0 bottom-0 bg-neutral-800 transition-all will-change-transform overflow-hidden"
    :class="isOpen ? 'translate-y-0 ease-out duration-500' : '-translate-y-full ease-in duration-300'"
    tabindex="0"
  >
    <MenuTop @toggle="toggle" />
    <div class="relative flex-grow">
      <!-- <MenuAccordion :menu-list="menuList" /> -->
    </div>

    <MenuBottom />
  </nav>
</template>

<style></style>
