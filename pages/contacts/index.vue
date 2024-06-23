<script lang="ts" setup>
import type { API } from '~/types/api'
const { data } = await useAsyncData<API.ContactsTESTPage>('contacts', () => $fetch('/api/v1/contacts'))
const contact = toValue(data)
if (!contact) throw createError("Can't fetch contact data")
</script>

<template>
  <SectionsContactsMain :contact />
</template>
