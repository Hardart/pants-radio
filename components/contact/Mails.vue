<script setup lang="ts">
import type { Mail } from '~/types/contacts'
defineProps<{ emails: Mail[] }>()
</script>

<template>
  <div>
    <ContactTitle type="mail" />
    <ul>
      <li v-for="mail in emails">
        <a class="hover:text-primary" :href="`mailto:${mail.address}`">
          {{ mail.address }} <span v-if="mail.label">({{ mail.label }})</span>
        </a>
      </li>
    </ul>
  </div>
  <!-- <p v-else v-html="splitTextByComma(contact.address.text)"></p> -->
</template>
