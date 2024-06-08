<script setup lang="ts">
import type { Contact } from '~/types/footer'
defineProps<{ contact: Contact }>()
</script>

<template>
  <a class="hover:text-primary" :href="`mailto:${contact.mail.title}`" v-if="contact.type === 'mail'">
    {{ contact.mail.title }} <span v-if="contact.label">({{ contact.label }})</span>
  </a>
</template>
