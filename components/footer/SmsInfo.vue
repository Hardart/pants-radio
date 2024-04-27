<script setup lang="ts">
import type { IFooterInfoItem } from '~/types/footer'

defineProps<{
  info: IFooterInfoItem
}>()
</script>

<template>
  <div class="flex items-center space-x-8 px-2 pt-8">
    <UiRateIcon :value="info.iconValue" />
    <div class="space-y-4 leading-5 sm:leading-4" v-html="info.text" />
  </div>
</template>

<style></style>
