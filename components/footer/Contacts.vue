<script setup lang="ts">
import { splitTextByComma } from '@/utils/splitTextByComma'
import type { Contact } from '~/types/contacts'

defineProps<{
  contact: Contact
}>()
</script>

<template>
  <ul class="space-y-2 px-4 max-md:text-sm max-sm:text-center sm:w-3/5">
    <li v-for="phone in contact.phones">
      <h5 class="font-medium">{{ phone.label }}:</h5>
      <a class="text-neutral-400 hover:text-primary" :href="`tel:${phone.number.replace(/[\(\)\s]/g, '')}`">{{ phone.number }}</a>
    </li>
    <li v-for="mail in contact.emails">
      <h5 class="font-medium">{{ mail.label }}:</h5>
      <a class="text-neutral-400 hover:text-primary" :href="`mailto:${mail.address}`">{{ mail.address }} </a>
    </li>
    <li v-for="address in contact.addresses">
      <h5 class="font-medium">{{ address.label }}:</h5>

      <a
        class="text-neutral-400 hover:text-primary"
        :href="address.info.yaMapUrl"
        v-html="splitTextByComma(address.info.fullAddress)"
      />
    </li>
  </ul>
</template>
