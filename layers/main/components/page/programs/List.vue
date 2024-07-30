<script setup lang="ts">
import type { Program } from '~/types/program'

const programs = inject<Program[]>('programs')
</script>

<template>
  <Section padding="small">
    <UiPageTitle title="Программы" />
    <ProgramsList v-if="programs" :programs />
  </Section>
</template>
