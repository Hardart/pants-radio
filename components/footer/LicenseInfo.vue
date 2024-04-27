<script setup lang="ts">
import type { IFooterInfoItem } from '~/types/footer'

defineProps<{
  info: IFooterInfoItem
}>()
</script>

<template>
  <div class="flex items-center px-2 pb-8 max-sm:flex-col sm:space-x-8">
    <UiRateIcon class="max-sm:hidden" :value="info.iconValue" />
    <div class="space-y-4 text-sm leading-4 max-sm:text-center md:text-base" v-html="info.text" />
  </div>
</template>

<style></style>
