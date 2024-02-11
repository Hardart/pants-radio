<script lang="ts" setup>
const route = useRoute()
const { newsSlug } = route.params
if (!newsSlug || typeof newsSlug !== 'string') throw createError('type of url parameter is not a STRING')
const { findOneBySlug } = useFetchProducts()

const { data: article } = findOneBySlug(newsSlug)
</script>

<template>
  <NewsBreadcrumbs v-if="article" :article="article" is-show-home-path />
  <Section padding="small" v-if="article">
    <div class="w-3/4">
      <UiPageTitle class="tracking-tight" :title="article.title" />
      <div>
        <div class="text-lg tracking-normal" v-html="article.text"></div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
