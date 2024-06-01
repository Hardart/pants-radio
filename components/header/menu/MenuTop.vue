<script setup lang="ts">
defineEmits(['toggleMenuState'])
</script>

<template>
  <div class="container mx-auto my-2 flex items-center justify-between px-3 text-neutral-100">
    <img src="/images/logo_text.svg" class="h-12" />
    <div class="cursor-pointer p-2 hover:bg-neutral-700/30" @click="$emit('toggleMenuState')">
      <Icon name="material-symbols:close-rounded" size="50" />
    </div>
  </div>
</template>
