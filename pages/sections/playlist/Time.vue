<script setup lang="ts">
const time = defineModel('time', { required: true, type: String })
</script>

<template>
  <div class="flex items-center gap-x-4">
    <UiSelect v-model:time="time" />
    <div class="flex items-center gap-x-1">
      <UiBorderedValue :value="time" />
      <span class="text-secondary/80">:</span>
      <UiBorderedValue value="00" />
    </div>
  </div>
</template>

<style></style>
