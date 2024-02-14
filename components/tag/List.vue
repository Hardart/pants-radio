<script setup lang="ts">
import type { Tag } from '~/types/article'
defineProps<{ tags: Tag[] | null }>()
</script>

<template>
  <div class="flex flex-wrap gap-4 mb-10">
    <TagItem v-for="tag in tags" :tag="tag" />
  </div>
</template>
