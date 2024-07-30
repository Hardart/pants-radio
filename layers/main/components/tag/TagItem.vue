<script setup lang="ts">
defineProps<{ tag: string }>()
const { isExactTag } = useQueryParams()
</script>

<template>
  <NuxtLink
    :to="isExactTag(tag) ? `/news` : `/news?tags=${tag}`"
    class="flex items-center pl-2.5 pr-3 pt-0.5 text-sm pb-1 border border-primary rounded-lg hover:bg-primary hover:text-neutral-50 active:bg-primary/75"
    :class="isExactTag(tag) && 'bg-primary text-neutral-50'"
  >
    <Icon name="material-symbols:tag" size="12" />
    <span>{{ tag }}</span>
  </NuxtLink>
</template>

<style></style>
