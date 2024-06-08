<script setup lang="ts">
import type { User } from '~/types/user'
const hosts = inject<User[]>('hosts')
</script>

<template>
  <Section>
    <SectionTitle title="Лица Радиостанции" />
    <HostCardList v-if="hosts" :hosts :v="1" />
  </Section>
</template>
