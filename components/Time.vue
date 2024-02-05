<script setup lang="ts">
const time = useDateFormat(useNow(), 'HH:mm')
</script>

<template>
  <div class="text-neutral-100">{{ time }}</div>
</template>

<style></style>
