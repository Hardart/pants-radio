<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-1 gap-6 px-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-6 xl:grid-cols-4">
    <ArticleCardSkeleton v-for="item in 8" />
  </div>
</template>
