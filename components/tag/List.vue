<script setup lang="ts">
import type { Tag } from '~/types/article'
defineProps<{ tags: Tag[] | null }>()
</script>

<template>
  <div class="flex space-x-2 mb-10">
    <NuxtLink to="/news" class="flex items-center pl-2.5 pr-3 py-2 border border-primary rounded-lg hover:bg-primary hover:text-neutral-50">
      <Icon name="material-symbols:tag" size="15" />
      <span>все</span>
    </NuxtLink>
    <TagItem v-for="tag in tags" :tag="tag" />
  </div>
</template>

<style></style>
