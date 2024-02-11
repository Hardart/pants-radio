<script setup lang="ts">
const { menuList } = defineProps<{
  menuList: IMenuItem[]
}>()
const { toggleMenuState } = useMenu()
</script>

<template>
  <div class="relative flex-grow block lg:hidden">
    <div class="absolute inset-0 overflow-auto">
      <HdrtAccordion :items="menuList" title-key="label" body-key="childrens" :handler="toggleMenuState" />
    </div>
  </div>
</template>
