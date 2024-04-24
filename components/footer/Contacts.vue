<script setup lang="ts">
import type { Contact } from '~/types/footer'
import { splitTextByComma } from '@/utils/splitTextByComma'


defineProps<{
  contacts: Contact[]
}>()


</script>

<template>
  <ul class="px-4 sm:w-3/5 space-y-2 max-sm:text-center max-md:text-sm">
    <li v-for="contact in contacts">
      <h5 class="font-medium">{{ contact.label }}:</h5>
      <a class="text-neutral-400 hover:text-primary" v-if="contact.type === 'phone'" :href="`tel:${contact.phone.replace(/[\(\)\s]/g, '')}`">{{ contact.phone }}</a>
      <a class="text-neutral-400 hover:text-primary" v-else-if="contact.type === 'mail'" :href="`mailto:${contact.mail}`">{{ contact.mail }}</a>
      <a class="text-neutral-400 hover:text-primary" v-else :href="contact.href" v-html="splitTextByComma(contact.text)"/>
    </li>
  </ul>
</template>


