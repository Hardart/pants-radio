<script setup lang="ts">
const focused = useWindowFocus()
const icon = useFavicon()
const { data } = await useFetch<IMenuItem[]>('/api/menu')
if (data) useState('menu-list', () => data)
watch(focused, () => {
  if (focused.value) icon.value = '/favicon_out.svg'
  else icon.value = '/favicon.svg'
})
</script>
<template>
  <div>
    <Header />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Footer />
  </div>
</template>
