<script lang="ts" setup>
const { data } = useAsyncData<IScheduleItem[]>('schedule', () => $fetch('/api/schedule'))
</script>

<template>
  <Section padding="small">
    <Time />
    <UiPageTitle title="Сетка вещания" />
    <SheduleList v-if="data" :schedule-data="data" />
  </Section>
</template>
