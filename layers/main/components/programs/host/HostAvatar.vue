<script setup lang='ts'>
  defineProps<{avatar: string}>()
</script>
 
<template>
  <div class="w-16 border-2 border-primary rounded-full overflow-hidden">
    <img :src="avatar || '/images/hosts/larin.png'" width="64" height="64" alt="" />
  </div>
</template>
