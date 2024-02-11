<script lang="ts" setup>
const route = useRoute()
const pageQuery = () => Number(route.query.page) || 1
const page = ref(pageQuery())
const { find } = useFetchProducts()
const { data } = await find(page)
const perPage = 4
</script>

<template>
  <Section>
    <UiPageTitle title="Новости" />
    <NewsAll :news="data" />
  </Section>
  <Section padding="none">
    <HdrtPagination v-model:page.number="page" :per-page="perPage" :total="2" />
  </Section>
</template>

<style scoped></style>
