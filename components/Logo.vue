<script setup lang="ts">
defineProps(['size', 'isMain'])
const { y } = useWindowScroll()

const scroll = ref(130)
const translateY = ref(35)

onMounted(() => {
  const maxValue = 130
  const minValue = 60
  const startFrom = ref(maxValue)
  const delta = 4
  const { pause } = useRafFn(
    () => {
      const initValue = y.value < minValue ? maxValue - y.value : clamp(y.value, maxValue, minValue)
      scroll.value = clamp((startFrom.value -= delta), initValue, maxValue)
      translateY.value = (35 * (scroll.value - minValue)) / (maxValue - minValue)
      if (scroll.value == minValue || scroll.value == maxValue - y.value) pause()
    },
    { immediate: true }
  )

  watch(y, () => {
    scroll.value = clamp(130 - y.value, 60, 130)
    translateY.value = (35 * (scroll.value - 60)) / 70
  })
})
</script>

<template>
  <div v-if="size" class="relative flex items-center">
    <NuxtLink to="/">
      <img src="/logo.svg" :width="size" :height="size" alt="logo" />
    </NuxtLink>
  </div>
  <div v-else class="ml-4 flex items-center justify-center md:relative md:max-w-[130px]">
    <NuxtLink to="/" class="flex items-center gap-2 md:hidden">
      <img src="/logo.svg" alt="logo" width="40" />
      <img src="/assets/logo-text.svg" class="h-6" alt="" />
    </NuxtLink>
    <NuxtLink to="/" :style="{ width: `${scroll}px` }" class="hidden md:block">
      <img src="/logo.svg" class="w-full" :style="{ transform: `translateY(${translateY}px)` }" alt="" />
    </NuxtLink>
  </div>
</template>
