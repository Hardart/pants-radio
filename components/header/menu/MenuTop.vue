<script setup lang="ts">
defineEmits(['toggleMenuState'])
</script>

<template>
  <div class="container mx-auto my-2 flex items-center justify-between text-neutral-100 lg:my-4">
    <img src="/assets/logo-text.svg" class="ml-4 h-8 md:h-10" />
    <div class="mr-2 cursor-pointer p-2 hover:bg-neutral-700/30" @click="$emit('toggleMenuState')">
      <Icon name="heroicons:x-mark" class="size-8 md:size-12" />
    </div>
  </div>
</template>
