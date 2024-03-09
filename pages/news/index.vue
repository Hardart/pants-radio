<script lang="ts" setup>
const { tags } = useMeta()
const { newsList, page, limit, total, initNews } = useNews()
await initNews()
</script>

<template>
  <Section padding="top">
    <UiPageTitle title="Новости" />
    <TagList v-if="tags" :tags="tags" />
    <NewsAll v-if="newsList" :news="newsList" />
    <HdrtPaginationS v-model:page.number="page" :per-page="limit" :total="total" />
  </Section>
</template>
