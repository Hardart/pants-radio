<script setup lang="ts">
defineProps<{ articles: ICard[] }>()
</script>

<template>
  <div class="grid grid-cols-1 px-5 sm:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-4">
    <template v-for="item in articles">
      <UiCard :item="item" item-type="news" />
    </template>
  </div>
</template>

<style></style>
