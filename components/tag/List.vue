<script setup lang="ts">
defineProps<{ tags: string[] | null }>()
</script>

<template>
  <div class="flex flex-wrap gap-4 mb-10">
    <TagItem v-for="tag in tags" :tag="tag" />
  </div>
</template>
