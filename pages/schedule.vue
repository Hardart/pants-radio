<script lang="ts" setup>
const { data } = await useFetch('/api/schedule')
</script>

<template>
  <Section padding="small">
    <UiPageTitle title="Сетка вещания" />
    <SheduleList :schedule-data="data!" />
  </Section>
</template>
