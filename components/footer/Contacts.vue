<script setup lang="ts">
import { splitTextByComma } from '@/utils/splitTextByComma'
import type { Contacts } from '~/types/contacts'

defineProps<{
  contacts: Contacts
}>()
</script>

<template>
  <ul class="space-y-2 px-4 max-md:text-sm max-sm:text-center sm:w-3/5">
    <li v-for="phone in contacts.phones">
      <h5 class="font-medium">{{ phone.label }}:</h5>
      <a class="text-neutral-400 hover:text-primary" :href="`tel:${phone.number.replace(/[\(\)\s]/g, '')}`">{{ phone.number }}</a>
    </li>
    <li v-for="mail in contacts.emails.filter((m) => m.showIn.includes('footer'))">
      <h5 class="font-medium">{{ mail.label }}:</h5>
      <a class="text-neutral-400 hover:text-primary" :href="`mailto:${mail.address}`">{{ mail.address }} </a>
    </li>
    <!-- <a
        class="text-neutral-400 hover:text-primary"
        v-else
        :href="contact.address.href"
        v-html="splitTextByComma(contact.address.text)"
      /> -->
  </ul>
</template>
