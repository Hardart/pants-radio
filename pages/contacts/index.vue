<script lang="ts" setup>
import type { API } from '~/types/api'
const { data } = await useAsyncData<API.ContactsPage>('contacts', () => $fetch('/api/v1/contacts'))
const res = toValue(data)
if (!res) throw createError("Can't fetch contacts api")
provide('base-contacts', res.contacts)
provide('commersial-contacts', res.commersial)
</script>

<template>
  <SectionsContactsMain />
</template>
