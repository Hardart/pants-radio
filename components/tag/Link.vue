<script setup lang="ts">
defineProps<{ tag: string }>()
const { changeTag, isExactTag } = useQueryParams()
</script>

<template>
  <NuxtLink
    @click="isExactTag(tag) ? undefined : changeTag(tag)"
    :to="`/news?tags=${tag}`"
    class="flex items-center pl-2.5 pr-3 py-2 border border-primary rounded-lg hover:bg-primary hover:text-neutral-50 active:bg-primary/75"
  >
    <Icon name="material-symbols:tag" size="15" />
    <span>{{ tag }}</span>
  </NuxtLink>
</template>

<style></style>
