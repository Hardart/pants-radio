<script lang="ts" setup>
const route = useRoute()
const pageQuery = () => Number(route.query.page) || 1
const page = ref(pageQuery())
const { find } = useNews()
const { data } = await find(page)
const perPage = 4
</script>

<template>
  <Section padding-bottom-remove>
    <UiPageTitle title="Новости" />
    <NewsAll :news="data.news" />
  </Section>
  <HdrtPagination v-model:page.number="page" :per-page="perPage" :total="data.total" />
</template>

<style scoped></style>
