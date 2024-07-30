<script lang="ts" setup>
import type { API } from '~/types/api'

const { data } = await useAsyncData<API.TeamPage>('team', () => $fetch('/api/v1/team'))
</script>

<template>
  <HdrtBreadcrumbs show-home :label-list="['контакты', 'команда']" />
  <Section padding="bottomSmall">
    <UiPageTitle title="Команда радио Штаны" />
    <HostCardList v-if="data?.team" :hosts="data.team" :v="2" show-position />
  </Section>
</template>
