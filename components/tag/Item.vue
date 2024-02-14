<script setup lang="ts">
import type { Tag } from '~/types/article'
defineProps<{ tag: Tag; inNews?: boolean }>()
const { isExactTag, changeTag } = useQueryParams()
</script>

<template>
  <NuxtLink
    @click="changeTag(tag.title)"
    :to="isExactTag(tag.title) ? `/news` : `/news?tag=${tag.title}`"
    class="flex items-center pl-2.5 pr-3 py-2 border border-primary rounded-lg hover:bg-primary hover:text-neutral-50 active:bg-primary/75"
    :class="isExactTag(tag.title) && 'bg-primary text-neutral-50'"
  >
    <Icon name="material-symbols:tag" size="15" />
    <span>{{ tag.title }}</span>
  </NuxtLink>
</template>

<style></style>
