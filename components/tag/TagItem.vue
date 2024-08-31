<script setup lang="ts">
defineProps<{ tag: string }>()
const { isExactTag } = useQueryParams()
</script>

<template>
  <NuxtLink
    :to="isExactTag(tag) ? `/news` : `/news?tags=${tag}`"
    class="flex items-center rounded-lg border border-primary pl-2.5 pr-3 text-sm hover:bg-primary hover:text-neutral-50 active:bg-primary/75 max-md:text-xs md:py-1"
    :class="isExactTag(tag) && 'bg-primary text-neutral-50'"
  >
    <Icon name="material-symbols:tag" size="12" />
    <span>{{ tag }}</span>
  </NuxtLink>
</template>

<style></style>
