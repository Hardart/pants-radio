<script setup lang="ts">
import type { Article } from '~/types/article'
const articles = inject<Article[]>('articles')
</script>

<template>
  <Section class="max-sm:!pt-6">
    <SectionTitle title="Новости" />
    <ArticleCardList v-if="articles" :articles />
  </Section>
</template>
