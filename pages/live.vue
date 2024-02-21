<script lang="ts" setup>
const { data } = useAsyncData(() => $fetch('/api/track'))
</script>

<template>
  <Section>
    <UiPageTitle title="Live" />
    <ul>
      <li v-for="track in data">
        <div>{{ track.artistName }} - {{ track.trackTitle }}</div>
        <div>{{ new Date(track.updatedAt!).toLocaleTimeString() }}</div>
      </li>
    </ul>
  </Section>
</template>

<style scoped></style>
