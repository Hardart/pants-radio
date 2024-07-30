<script setup lang="ts">
const weekdays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
</script>

<template>
  <div class="mb-3 grid grid-cols-7 items-center justify-items-center">
    <div class="first-letter:uppercase" v-for="day in weekdays">{{ day }}</div>
  </div>
</template>

<style></style>
