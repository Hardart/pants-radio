<script lang="ts" setup>
const { data } = useAsyncData<IScheduleItem[]>('schedule', () => $fetch('/api/schedule'))
</script>

<template>
  <Section padding="small">
    <UiPageTitle title="Сетка вещания" />

    <ScheduleList v-if="data" :schedule-data="data" />
  </Section>
</template>
