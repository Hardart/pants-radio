<script setup lang="ts">
const host = useState('host')
</script>

<template>
  <div class="grid size-[40px] place-items-center rounded-lg bg-teal-600 md:size-[60px]">
    <div class="drop-shadow max-md:text-xs md:font-bold" :class="host ? 'text-emerald-300' : 'text-neutral-400'">ONAIR</div>
  </div>
</template>
