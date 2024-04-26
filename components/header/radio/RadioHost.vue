<script setup lang="ts">
const { initSocket, onHostOnAir } = useSocket()
const host = ref('')
initSocket()
onHostOnAir(host)
</script>

<template>
  <div class="size-[60px] bg-teal-600 rounded-lg grid place-items-center">
    <div class="font-bold drop-shadow" :class="host ? 'text-emerald-300' : 'text-neutral-400'">ONAIR</div>
  </div>
</template>