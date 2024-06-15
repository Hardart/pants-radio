<script setup lang="ts">
import type { Contact } from '~/types/contacts'
defineProps<{ contact: Contact }>()
</script>

<template>
  <a class="hover:text-primary" :href="`tel:${onlyNumbers(contact.phone)}`" v-if="'phone' in contact">
    {{ contact.phone }} ({{ contact.label }})
  </a>
  <a class="hover:text-primary" :href="`mailto:${contact.mail}`" v-else-if="'mail' in contact">
    {{ contact.mail }} <span v-if="contact.label">({{ contact.label }})</span>
  </a>
  <p v-else v-html="splitTextByComma(contact.address.text)"></p>
</template>
