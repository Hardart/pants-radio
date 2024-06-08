<script setup lang="ts">
import type { Contact } from '~/types/footer'
defineProps<{ contact: Contact }>()
</script>

<template>
  <a class="hover:text-primary" :href="`tel:${onlyNumbers(contact.phone.number)}`" v-if="contact.type === 'phone'">
    {{ contact.phone.number }} ({{ contact.label }})
  </a>
</template>
