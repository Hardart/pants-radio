<script setup lang="ts">
defineProps<{ menuItems: IMenuItem[] }>()
</script>

<template>
  <div class="container mx-auto hidden lg:block">
    <ul class="grid sm:grid-cols-2 max-lg:gap-y-8 lg:grid-cols-4 lg:justify-items-center max-lg:px-8 mb-4 w-full text-neutral-100">
      <HeaderMenuItem v-for="item in menuItems" :menu-item="item" />
    </ul>
  </div>
</template>

<style></style>
