<script setup lang="ts">
const route = useRoute()
const parseRoute = route.fullPath.split('/').slice(-1)
</script>

<template>
  <Section>
    <SectionTitle title="Some slug" />
    <h1>{{ parseRoute }}</h1>
  </Section>
</template>

<style></style>
