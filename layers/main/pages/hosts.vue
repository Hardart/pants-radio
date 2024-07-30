<script lang="ts" setup>
import type { API } from '~/types/api'

const { data } = await useFetch<API.MainPage>('/api/v1/base', {
  query: { limit: 4 },
  key: 'base-data',
  getCachedData: (key) => useNuxtApp().payload.data[key]
})
const response = toValue(data)
if (response === null) throw createError("Can't fetch data")
const filter = [
  {
    option: 'all',
    label: 'Все'
  },
  {
    option: 'dj',
    label: 'Диджеи'
  },
  {
    option: 'host',
    label: 'Ведущие шоу'
  },
  {
    option: 'press',
    label: 'Пресс-служба'
  }
]
const selectedPosition = ref<string>(filter[0].option)

const filteredHosts = computed(() => {
  if (selectedPosition.value === filter[0].option) return response.hosts
  else return response.hosts.filter((host) => host.position.includes(selectedPosition.value))
})
</script>

<template>
  <Section>
    <UiPageTitle title="Ведущие" />
    <div class="flex gap-6">
      <USelectMenu
        class="mb-6 w-44 max-w-44"
        v-model="selectedPosition"
        :options="filter"
        option-attribute="label"
        value-attribute="option"
      />
    </div>
    <HostCardList :hosts="filteredHosts" :v="2" />
  </Section>
</template>
