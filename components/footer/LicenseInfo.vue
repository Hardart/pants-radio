<script setup lang="ts">
import type { IFooterInfoItem } from '~/types/footer';

defineProps<{
  info: IFooterInfoItem
}>()
</script>

<template>
  <div class="flex max-sm:flex-col items-center px-2 pb-8 sm:space-x-8">
    <UiRateIcon class="max-sm:hidden" :value="info.iconValue" />
    <div class="space-y-4 leading-4 text-sm md:text-base max-sm:text-center" v-html="info.text"/>
  </div>
</template>

<style></style>
