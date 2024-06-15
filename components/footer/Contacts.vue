<script setup lang="ts">
import type { Contact } from '~/types/footer'
import { splitTextByComma } from '@/utils/splitTextByComma'

defineProps<{
  contacts: Contact[]
}>()
</script>

<template>
  <ul class="space-y-2 px-4 max-md:text-sm max-sm:text-center sm:w-3/5">
    <li v-for="contact in contacts">
      <h5 class="font-medium">{{ contact.label }}:</h5>
      <a
        v-if="'phone' in contact"
        class="text-neutral-400 hover:text-primary"
        :href="`tel:${contact.phone.replace(/[\(\)\s]/g, '')}`"
        >{{ contact.phone }}</a
      >
      <a class="text-neutral-400 hover:text-primary" v-else-if="'mail' in contact" :href="`mailto:${contact.mail}`">
        {{ contact.mail }}
      </a>
      <a
        class="text-neutral-400 hover:text-primary"
        v-else
        :href="contact.address.href"
        v-html="splitTextByComma(contact.address.text)"
      />
    </li>
  </ul>
</template>
