<script setup lang="ts"></script>

<template>
  <Section padding="small">
    <div class="grid grid-cols-1 gap-2 md:gap-5 lg:grid-cols-2">
      <UiTrackSkeleton v-for="item in 16" />
    </div>
  </Section>
</template>
