<script setup lang="ts">
const time = defineModel('time', { required: true, type: String })
</script>

<template>
  <div class="flex items-center gap-x-4">
    <UiSelect v-model:time="time" />
  </div>
</template>

<style></style>
