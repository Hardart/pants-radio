<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <div>
    <img :src class="size-full rounded-md" alt="" width="60" height="60" loading="lazy" />
  </div>
</template>
