<script setup lang="ts">
defineProps(['size', 'isMain'])
const { y } = useWindowScroll()
const scroll = ref(0)
onMounted(() => (scroll.value = y.value))
watch(y, () => (scroll.value = y.value))
</script>

<template>
  <div class="relative flex items-center">
    <NuxtLink to="/">
      <img v-if="size" src="/logo.svg" :width="size" :height="size" alt="logo" />
      <img
        v-if="isMain"
        src="/logo.svg"
        class="mt-20 w-[130px] transition-all duration-500"
        :class="scroll > 20 && 'w-[60px] -translate-y-10'"
        alt="logo"
      />
    </NuxtLink>
  </div>
</template>

<style></style>
