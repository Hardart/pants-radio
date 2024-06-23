<script setup lang="ts">
import type { Address } from '~/types/contacts'
defineProps<{ addresses: Address[] }>()
</script>

<template>
  <div>
    <ContactTitle type="address" />
    <ul>
      <li v-for="address in addresses">
        <p v-html="splitTextByComma(address.info.fullAddress)" />
      </li>
    </ul>
  </div>
</template>
