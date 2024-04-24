<script setup lang="ts">
const { initSocket, onHostOnAir } = useSocket()
const host = ref('')
initSocket()
onHostOnAir(host)
</script>

<template>
  <div class="size-[60px] bg-teal-600 rounded-lg grid place-items-center">
    <div class="font-bold text-emerald-300 drop-shadow" v-if="host">ONAIR</div>
  </div>
</template>