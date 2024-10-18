<script setup lang="ts"></script>

<template>
  <article class="animation-pulse group relative flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-md">
    <header class="aspect-video w-full bg-gray-300"></header>

    <div class="animate-pulse space-y-4 bg-gray-100 px-4 py-4 md:space-y-6 lg:space-y-4">
      <div class="h-3 w-full rounded bg-gray-300"></div>
      <div class="h-3 w-4/5 rounded bg-gray-300"></div>
      <div class="h-2 w-1/4 rounded bg-gray-300"></div>
    </div>
  </article>
</template>
