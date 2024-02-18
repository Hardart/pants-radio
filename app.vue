<script setup lang="ts">
const focused = useWindowFocus()
const icon = useFavicon()
watch(focused, () => {
  if (focused.value) icon.value = '/favicon_out.svg'
  else icon.value = '/favicon.svg'
})
const { data } = useAsyncData('meta', () => $fetch('/api/menu'))
if (data) useState('menu-list', () => data)
</script>
<template>
  <div>
    <NuxtLoadingIndicator />
    <HeaderMain />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <FooterMain />
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
