<script setup lang="ts">
import type { MenuItem } from '~/types/menu'

defineProps<{ menuList: MenuItem[] }>()
const { toggleMenuState } = useMenu()
</script>

<template>
  <div class="relative block flex-grow lg:hidden">
    <div class="absolute inset-0 overflow-auto">
      <HdrtAccordion :items="menuList" title-key="label" body-key="childrens" @on-click="toggleMenuState" />
    </div>
  </div>
</template>
