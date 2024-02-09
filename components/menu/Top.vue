<script setup lang="ts">
defineEmits(['toggle'])
</script>

<template>
  <div class="flex container mx-auto items-center justify-between text-neutral-100 px-3 my-2">
    <img src="/images/logo_text.svg" class="h-12" />
    <div class="p-2 hover:bg-neutral-700/30 cursor-pointer" @click="$emit('toggle')">
      <Icon name="material-symbols:close-rounded" size="50" />
    </div>
  </div>
</template>

<style></style>
