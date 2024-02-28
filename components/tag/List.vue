<script setup lang="ts">
defineProps<{ tags: string[] | null; articleTags?: boolean }>()
</script>

<template>
  <div class="flex flex-wrap gap-4 mb-10">
    <TagLink v-if="articleTags" v-for="tag in tags" :tag="tag" />
    <TagItem v-else v-for="tag in tags" :tag="tag" />
  </div>
</template>
