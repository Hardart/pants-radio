<script setup lang="ts">
defineProps(['size'])
</script>

<template>
  <NuxtLink to="/">
    <img v-if="size" src="/logo.svg" :width="size" :height="size" alt="logo" />
    <img v-else src="/logo.svg" width="100" height="100" alt="logo" />
  </NuxtLink>
</template>

<style></style>
