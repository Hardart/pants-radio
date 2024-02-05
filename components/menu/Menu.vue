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
  <div
    ref="menu"
    class="fixed top-0 left-0 w-full bg-neutral-800 transition-all focus-visible:outline-none will-change-transform"
    :class="isOpen ? 'translate-y-0 ease-out duration-500' : '-translate-y-full ease-in duration-300'"
    @keyup.esc="toggle"
    tabindex="0"
  >
    <div class="container relative mx-auto mt-5 mb-14">
      <div class="flex items-center justify-between text-neutral-100 px-3">
        <img src="/images/logo_text.svg" class="h-14" alt="" />
        <div class="p-2 hover:bg-neutral-700/30 cursor-pointer" @click="toggle">
          <Icon name="material-symbols:close-rounded" size="50" />
        </div>
      </div>
      <MenuList v-if="menuList" :menu-items="menuList" @toggle="toggle" />
      <div class="flex items-center justify-between text-neutral-500">
        <SocialIcons hover-color="primary" />
        <div class="flex items-center text-sm">
          <NuxtLink class="underline pr-3 mr-3 border-r border-neutral-500 hover:text-neutral-400">Правовая информация</NuxtLink>
          <NuxtLink class="underline hover:text-neutral-400">Политика конфиденциальности</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
