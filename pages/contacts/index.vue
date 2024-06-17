<script lang="ts" setup>
import type { API } from '~/types/api'
const { data } = await useAsyncData<API.ContactsTESTPage>('contacts', () => $fetch('/api/v1/contacts'))
const contacts = toValue(data)
if (!contacts) throw createError("Can't fetch contacts api")
</script>

<template>
  <SectionsContactsMain :contacts />
</template>
