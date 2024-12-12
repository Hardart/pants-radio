<script setup lang="ts">
defineEmits(['toggleMenuState'])
</script>

<template>
  <div class="container mx-auto">
    <div class="mb-8 flex items-center justify-center text-neutral-500 max-lg:mt-4 md:justify-between">
      <SocialIcons hover-color="primary" hide-on-small-screen />
      <div class="flex items-center text-sm max-md:flex-col">
        <NuxtLink
          to="/information"
          class="border-neutral-500 underline hover:text-neutral-400 md:mr-3 md:border-r md:pr-3"
          exact-active-class="text-neutral-400"
          @click="$emit('toggleMenuState')"
        >
          Правовая информация
        </NuxtLink>
        <NuxtLink
          to="/privacy"
          class="underline hover:text-neutral-400"
          exact-active-class="text-neutral-400"
          @click="$emit('toggleMenuState')"
        >
          Политика конфиденциальности
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
