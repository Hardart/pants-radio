<script setup lang="ts">
import { STATE } from '@/types/state-enum'
const focused = useWindowFocus()
const icon = useFavicon()
watch(focused, () => {
  if (focused.value) icon.value = '/favicon_out.svg'
  else icon.value = '/favicon.svg'
})
const { data: metaData } = await useAsyncData(STATE.META, () => $fetch('/api/v1/meta'))
if (metaData) useState(STATE.META, () => metaData)
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <HeaderMain />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <LazyFooterMain />
  </div>
</template>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
