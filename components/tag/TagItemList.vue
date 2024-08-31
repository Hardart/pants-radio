<script setup lang="ts">
defineProps<{ tags: string[] | null }>()
</script>

<template>
  <div class="mb-4 flex flex-wrap gap-2 md:mb-10 md:gap-4">
    <TagItem v-for="tag in tags" :tag="tag" />
  </div>
</template>
