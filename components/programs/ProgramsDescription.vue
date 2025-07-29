<script setup lang="ts">
defineProps<{ description?: string }>()
</script>

<template>
  <div class="-mx-6 space-y-2 rounded-md p-6 text-neutral-700 shadow-md xl:w-2/3" v-if="description" v-html="description"></div>
</template>
