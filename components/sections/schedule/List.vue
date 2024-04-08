<script lang="ts" setup>
import type { IScheduleItem } from '~/types/schedule'

const { data } = await useAsyncData<IScheduleItem[]>('schedule', () => $fetch('/api/v1/schedule'), {
  getCachedData: key => useNuxtApp().payload.data[key],
})

</script>

<template>
  <Section padding="small">
    <UiPageTitle title="Сетка вещания" />
    <ScheduleList v-if="data" :schedule-data="data" />
  </Section>
</template>
