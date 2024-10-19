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
    <NuxtLoadingIndicator color="#f15a24" :height="2" />
    <HeaderMain />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <FooterMain />
    <Radio class="fixed bottom-0 left-0 right-0 md:hidden" />
    <UNotifications />
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
