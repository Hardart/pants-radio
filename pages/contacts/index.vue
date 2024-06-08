<script lang="ts" setup>
import type { Contacts } from '~/types/contacts'

const { data } = await useAsyncData<Contacts>('contacts', () => $fetch('/api/v1/contacts'))
const res = toValue(data)
if (!res) throw createError("Can't fetch data")
provide('base-contacts', res)
</script>

<template>
  <SectionsContactsMain />
</template>
