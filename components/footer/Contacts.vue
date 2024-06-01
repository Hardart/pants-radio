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
        v-if="contact.type === 'phone'"
        class="text-neutral-400 hover:text-primary"
        :href="`tel:${contact.phone.number.replace(/[\(\)\s]/g, '')}`"
      >
        {{ contact.phone.number }}
      </a>
      <a class="text-neutral-400 hover:text-primary" v-else-if="contact.type === 'mail'" :href="`mailto:${contact.mail.title}`">
        {{ contact.mail.title }}
      </a>
      <a class="text-neutral-400 hover:text-primary" v-else :href="contact.href" v-html="splitTextByComma(contact.text)" />
    </li>
  </ul>
</template>
