<script lang="ts" setup>
const route = useRoute()
const title = route.params.categorySlug as string
</script>

<template>
  <NewsBreadcrumbs type="категория" :article="title" show-home-path />
  <Section padding="small">
    <UiPageTitle title="Категория" />
  </Section>
</template>

<style scoped></style>
