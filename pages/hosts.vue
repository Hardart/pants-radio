<script lang="ts" setup>
import type { User } from '~/types/user'

const hosts = inject<User[]>('hosts')
if (hosts === undefined) throw createError("Can't inject hosts")

const filter = [
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
  if (selectedPosition.value === filter[0].option) return hosts
  else return hosts.filter((host) => host.position.includes(selectedPosition.value))
})

const options = computed(() => {
  const existOptions = hosts.flatMap((host) => host.position)
  const setOfOptions = new Set(existOptions)
  const res = [...setOfOptions].flatMap((option) => filter.filter((filterItem) => filterItem.option === option))
  if (res.length <= 1) return null
  return [
    {
      option: 'all',
      label: 'Все'
    },
    ...res
  ]
})
</script>

<template>
  <Section>
    <UiPageTitle title="Ведущие" />

    <div class="flex gap-6">
      <USelectMenu
        v-if="options"
        class="mb-6 w-44 max-w-44"
        v-model="selectedPosition"
        :options
        option-attribute="label"
        value-attribute="option"
      />
    </div>
    <HostCardList :hosts="filteredHosts" :v="2" />
  </Section>
</template>
