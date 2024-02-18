<script setup lang="ts">
defineProps(['size', 'isMain'])
const { y } = useWindowScroll()
const { isMobile } = useDevice()
const scroll = ref(130)
const maxValue = 130
const minValue = 60
const startFrom = ref(maxValue)
const translateY = ref(35)
const delta = 4

const { pause, resume } = useRafFn(
  () => {
    const initValue = y.value < minValue ? maxValue - y.value : clamp(y.value, maxValue, minValue)
    scroll.value = clamp((startFrom.value -= delta), initValue, maxValue)
    translateY.value = (35 * (scroll.value - minValue)) / (maxValue - minValue)
    if (scroll.value == minValue || scroll.value == maxValue - y.value) pause()
  },
  { immediate: false }
)
onMounted(() => {
  resume()
})

watch(y, () => {
  scroll.value = clamp(130 - y.value, 60, 130)
  translateY.value = (35 * (scroll.value - 60)) / 70
})
</script>

<template>
  <div v-if="size" class="relative flex items-center">
    <NuxtLink to="/">
      <img src="/logo.svg" :width="size" :height="size" alt="logo" />
    </NuxtLink>
  </div>
  <div v-else class="relative flex items-center" :style="!isMobile && `width: ${scroll}px;`">
    <NuxtLink to="/">
      <img v-if="isMobile" src="/logo.svg" width="60" height="60" class="ml-2" alt="" />
      <img
        v-else
        src="/logo.svg"
        :width="scroll"
        :height="scroll"
        class="ml-2"
        :style="`width: ${scroll}px; transform: translateY(${translateY}px);`"
        alt=""
      />
    </NuxtLink>
  </div>
</template>

<style></style>
