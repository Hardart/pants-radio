<script setup lang="ts">
import { STATE } from '~/enums/state-enum'

import MainHeader from './layers/main/components/header/Main.vue'
import MainFooter from './layers/main/components/footer/Main.vue'

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
    <MainHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <MainFooter /> -->
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
