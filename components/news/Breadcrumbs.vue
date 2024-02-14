<script lang="ts" setup>
import type { Article } from '~/types/article'
type NewsBreadcrumbs = {
  showHomePath?: boolean
} & (
  | {
      type: 'новость'
      article: Article
    }
  | {
      type: 'категория'
      article: string
    }
)
const props = defineProps<NewsBreadcrumbs>()
const crumbs: IBreadcrumbsItem[] =
  props.type === 'новость'
    ? [
        { label: 'новости', link: '/news' },
        { label: props.article.category.title.toLowerCase(), link: `/news/${props.article.category.slug}` },
        { label: props.article.title.toLowerCase(), link: '' },
      ]
    : [
        { label: 'новости', link: '/news' },
        { label: props.article.toLowerCase(), link: '' },
      ]
</script>

<template>
  <Section padding="small">
    <ul class="flex items-center w-full pr-2 overflow-hidden overflow-x-auto scrollbar-hide">
      <li v-if="showHomePath" class="text-primary hover:text-primary/80">
        <NuxtLink to="/"><Icon name="mdi:home" size="24" /></NuxtLink>
      </li>
      <li v-for="(item, i) in crumbs" class="whitespace-nowrap">
        <span class="mx-2 text-neutral-400" v-if="showHomePath || i">/</span>
        <NuxtLink class="font-medium hover:text-primary/80" v-if="i < crumbs.length - 1" :to="item.link">{{ item.label }}</NuxtLink>
        <span class="text-neutral-600 dark:text-neutral-500" v-else>{{ item.label }}</span>
      </li>
    </ul>
  </Section>
</template>
