<script lang="ts" setup>
import type { API } from '~/types/api'
import type { User } from '~/types/user'

const { data } = await useFetch<API.MainPage>('/api/v1/base', {
  query: { limit: 4 },
  key: 'base-data',
  getCachedData: (key) => useNuxtApp().payload.data[key]
})
const response = toValue(data)
if (response === null) throw createError("Can't fetch data")
const selectedPosition = ref<string>('Все')
const filteredPositions = computed(() => response.hosts.reduce(filterPosition, ['Все']))
const filteredHosts = computed(() => {
  if (selectedPosition.value === 'Все') return response.hosts
  else return response.hosts.filter((host) => host.position === selectedPosition.value)
})
function filterPosition(acc: string[], host: User) {
  if (!acc.includes(host.position)) acc.push(host.position)
  return acc
}
</script>

<template>
  <Section>
    <UiPageTitle title="Ведущие" />
    <USelectMenu class="mb-6 max-w-32" v-model="selectedPosition" :options="filteredPositions" option-attribute="position" />
    <HostCardList :hosts="filteredHosts" :v="2" />
  </Section>
</template>
