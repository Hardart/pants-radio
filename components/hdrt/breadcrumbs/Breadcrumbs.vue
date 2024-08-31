<script setup lang="ts">
const route = useRoute()
const { labelList } = defineProps<{
  showHome?: boolean
  labelList: string[]
}>()
let to = ''
const crumbs = route.fullPath
  .substring(1)
  .split('/')
  .reduce(
    (acc, curr, index) => {
      to += `/${curr}`
      const label = labelList[index].toLowerCase()
      if (index === labelList.length - 1) acc.push({ label })
      else acc.push({ label, to })
      return acc
    },
    [] as { label: string; to?: string }[]
  )
</script>

<template>
  <Section padding="small">
    <ul class="flex items-center overflow-x-auto whitespace-nowrap">
      <li v-if="showHome" class="text-primary hover:text-primary/80">
        <NuxtLink to="/"><Icon name="mdi:home" size="24" /></NuxtLink>
      </li>
      <li v-for="(item, i) in crumbs">
        <span class="mx-2 text-neutral-400" v-if="showHome || i">/</span>
        <NuxtLink class="font-medium hover:text-primary/80" v-if="item.to" :to="item.to">{{ item.label }}</NuxtLink>
        <span class="text-neutral-600 dark:text-neutral-500" v-else>{{ item.label }}</span>
      </li>
    </ul>
  </Section>
</template>

<style></style>
