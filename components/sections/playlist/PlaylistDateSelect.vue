<script setup lang="ts">
const startFrom = useState<string>('archive:start')
const date = useState<Date>('archive:date')
const hour = useState<string>('archive:hour')
</script>

<template>
  <Section padding="none">
    <div class="flex items-center gap-x-4">
      <PlaylistArchiveDay v-model="date" :startFrom />
      <PlaylistArchiveTime v-model="date" v-model:hour="hour" />
    </div>
  </Section>
</template>
