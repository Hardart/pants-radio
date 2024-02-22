<script setup lang="ts">
const time = defineModel('time')
const isOpen = ref(false)
const changeState = () => (isOpen.value = !isOpen.value)
const items = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']

const onItem = (item: string) => {
  time.value = item.slice(0, 2)
  changeState()
}
</script>

<template>
  <div class="relative">
    <div class="grid place-items-center size-10 rounded-lg z-20 btn-primary" @click="changeState">
      <Icon name="material-symbols:nest-clock-farsight-analog-outline-rounded" size="27" />
    </div>
    <TransitionFade>
      <ul class="py-2 max-h-48 overflow-hidden overflow-y-auto absolute z-10 bg-neutral-50 space-y-2" v-if="isOpen">
        <li class="px-3 hover:bg-neutral-300 cursor-pointer" @click="onItem(item)" v-for="item in items">{{ item }}</li>
      </ul>
    </TransitionFade>
  </div>
</template>
