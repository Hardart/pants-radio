<script lang="ts" setup>
import type { Article } from '~/types/article'

const { article } = defineProps<{
  article: Article
  isShowHomePath?: boolean
}>()
const crumbs: IBreadcrumbsItem[] = [
  { label: 'новости', link: '/news' },
  { label: article.category.title.toLowerCase(), link: `/news/${article.category.slug}` },
  { label: article.title.toLowerCase(), link: article.url },
]
</script>

<template>
  <Section padding="small">
    <ul class="flex items-center w-full pr-2 overflow-hidden overflow-x-auto scrollbar-hide">
      <li v-if="isShowHomePath" class="text-primary hover:text-primary/80">
        <NuxtLink to="/"><Icon name="mdi:home" size="24" /></NuxtLink>
      </li>
      <li v-for="(item, i) in crumbs" class="whitespace-nowrap">
        <span class="mx-2 text-neutral-400" v-if="isShowHomePath || i">/</span>
        <NuxtLink class="font-medium hover:text-primary/80" v-if="i < crumbs.length - 1" :to="item.link">{{ item.label }}</NuxtLink>
        <span class="text-neutral-600 dark:text-neutral-500" v-else>{{ item.label }}</span>
      </li>
    </ul>
  </Section>
</template>
