<script setup lang="ts">
const { initSocket, onHostOnAir } = useSocket()
const host = useState('host')
// initSocket()
// onHostOnAir(host)
</script>

<template>
  <div class="grid size-[60px] place-items-center rounded-lg bg-teal-600">
    <div class="font-bold drop-shadow" :class="host ? 'text-emerald-300' : 'text-neutral-400'">ONAIR</div>
  </div>
</template>
