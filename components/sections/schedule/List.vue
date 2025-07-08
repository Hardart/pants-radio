<script lang="ts" setup>
import type { API } from '~/types/api'

const { data } = await useAsyncData<API.Schedule[]>('schedule', () => $fetch('/api/v2/schedule'), {
  getCachedData: (key) => useNuxtApp().payload.data[key]
})
</script>

<template>
  <Section padding="small">
    <UiPageTitle title="Сетка вещания" />
    <ScheduleList v-if="data" :schedule-data="data" />
  </Section>
</template>
