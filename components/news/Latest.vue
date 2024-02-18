<script setup lang="ts">
defineProps<{ news: ICard[] }>()
</script>

<template>
  <div class="grid grid-cols-1 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-3 md:gap-6 lg:gap-4">
    <template v-for="item in news">
      <UiCard :item="item" item-type="news" />
    </template>
  </div>
</template>

<style></style>
