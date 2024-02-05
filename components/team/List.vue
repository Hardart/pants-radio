<script setup lang="ts">
const { data } = await useFetch('/api/team')
</script>

<template>
  <div class="grid grid-cols-5 gap-x-10 gap-y-6">
    <TeamCard v-for="person in data" :person="person" />
  </div>
</template>

<style></style>
