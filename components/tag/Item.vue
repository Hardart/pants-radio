<script setup lang="ts">
defineProps<{ tag: string }>()
const { isExactTag, changeTag } = useQueryParams()
</script>

<template>
  <NuxtLink
    @click="changeTag(tag)"
    :to="isExactTag(tag) ? `/news` : `/news?tags=${tag}`"
    class="flex items-center pl-2.5 pr-3 py-2 border border-primary rounded-lg hover:bg-primary hover:text-neutral-50 active:bg-primary/75"
    :class="isExactTag(tag) && 'bg-primary text-neutral-50'"
  >
    <Icon name="material-symbols:tag" size="15" />
    <span>{{ tag }}</span>
  </NuxtLink>
</template>

<style></style>
