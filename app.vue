<script setup lang="ts">
const focused = useWindowFocus()
const icon = useFavicon()

watch(focused, () => {
  if (focused.value) icon.value = 'favicon_out.svg'
  else icon.value = 'favicon.svg'
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
