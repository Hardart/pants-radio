<script setup lang="ts">
const getInitialItems = () => [1, 6, 2, 8, 3, 100, 12, 4, 5]
const items = ref(getInitialItems())
const sortedHosts = () => items.value.sort()
const reset = () => (items.value = getInitialItems())
const odds = () => (items.value = items.value.filter((item) => item % 2 !== 0))
</script>

<template>
  <Section>
    <div>
      <UButton label="Sort" @click="sortedHosts" />
      <UButton label="reset" @click="reset" />
      <UButton label="odd" @click="odds" />
    </div>
    <TransitionGroup tag="ul" name="fade" class="container my-4 grid grid-cols-4 gap-5" :duration="400" type="animation">
      <li v-for="item in items" class="bg-white p-2 text-center shadow" :key="item">
        <div>{{ item }}</div>
      </li>
    </TransitionGroup>
  </Section>
</template>
