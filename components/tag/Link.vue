<script setup lang="ts">
import type { Tag } from '~/types/article'
defineProps<{ tag: Tag }>()
const { changeTag, isExactTag } = useQueryParams()
</script>

<template>
  <NuxtLink
    @click="isExactTag(tag.title) ? undefined : changeTag(tag.title)"
    :to="`/news?tag=${tag.title}`"
    class="flex items-center pl-2.5 pr-3 py-2 border border-primary rounded-lg hover:bg-primary hover:text-neutral-50 active:bg-primary/75"
  >
    <Icon name="material-symbols:tag" size="15" />
    <span>{{ tag.title }}</span>
  </NuxtLink>
</template>

<style></style>
