<script setup lang='ts'>
import type { Host } from '~/types/hosts';

const hosts = inject<Host[]>('hosts')
</script>
 
<template>
  <Section>
    <SectionTitle title="Лица Радиостанции" />
    <HostList v-if="hosts" :hosts/>
  </Section>
</template>
 