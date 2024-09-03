<script lang="ts" setup></script>

<template>
  <main class="relative top-14 bg-neutral-50 px-2 pb-12 sm:px-0 md:top-20">
    <div class="container mx-auto pt-4 max-sm:hidden">
      <SocialIcons class="justify-end text-primary" hover-color="primary" hide-on-small-screen />
    </div>
    <slot />
  </main>
</template>

<style scoped></style>
