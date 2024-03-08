<script lang="ts" setup>
const { tags } = useMeta()
const { newsData, page, limit, total, initNews } = useNews()
const { pending } = await initNews()
</script>

<template>
  <Section padding="top">
    <UiPageTitle title="Новости" />
    <TagList v-if="tags" :tags="tags" />
    <NewsAll v-if="newsData" :news="newsData" />
    <HdrtPaginationS v-if="!pending" v-model:page.number="page" :per-page="limit" :total="total" />
  </Section>
</template>

<style scoped></style>
