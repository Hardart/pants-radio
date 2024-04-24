<script setup lang="ts">
defineProps<{
  src?: string
}>()
</script>

<template>
  <div class="rounded-md overflow-clip">
    <img :src="src" alt="" width="60" height="60" />
  </div>
</template>
