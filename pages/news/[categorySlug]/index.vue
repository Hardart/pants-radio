<script lang="ts" setup></script>

<template>
  <NewsBreadcrumbs type="категория" :article="$route.params.categorySlug as string" show-home-path />
  <Section padding="small">
    <UiPageTitle title="Категория" />
  </Section>
</template>

<style scoped></style>
