<script setup lang="ts">
import type { Phone } from '~/types/contacts'
defineProps<{ phones: Phone[] }>()
</script>

<template>
  <div>
    <ContactTitle type="phone" />
    <ul>
      <li v-for="phone in phones">
        <a class="hover:text-primary" :href="`tel:${onlyNumbers(phone.number)}`"> {{ phone.number }} ({{ phone.label }}) </a>
      </li>
    </ul>
  </div>
  <!-- <p v-else v-html="splitTextByComma(contact.address.text)"></p> -->
</template>
