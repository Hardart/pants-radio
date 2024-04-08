<script setup lang='ts'>

const articles = inject<ICard[]>('articles')
if (!articles) throw createError('No articles')
</script>
 
<template>
  <Section>
    <SectionTitle title="Новости" />
    <ArticleList :articles/>
  </Section>
</template>
