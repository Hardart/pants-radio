<script setup lang="ts">
import type { Tag } from '~/types/article'
defineProps<{ tag: Tag }>()
const { changeTag, tag: tagRef } = useQueryParams()
</script>

<template>
  <NuxtLink
    @click="changeTag(tag.title)"
    :to="tagRef === tag.title ? `/news` : `/news?tag=${tag.title}`"
    class="flex items-center pl-2.5 pr-3 py-2 border border-primary rounded-lg hover:bg-primary hover:text-neutral-50"
    :class="tagRef === tag.title && 'bg-primary'"
  >
    <Icon name="material-symbols:tag" size="15" />
    <span>{{ tag.title }}</span>
  </NuxtLink>
</template>

<style></style>
