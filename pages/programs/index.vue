<script lang="ts" setup>
import type { API } from '~/types/api'

const { data } = await useFetch<API.Programs>('/api/v2/programs')
provide('programs', data.value?.programs)
</script>

<template>
  <SectionsProgramsList />
</template>
