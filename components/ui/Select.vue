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
      <ul class="p-2 max-h-48 overflow-y-auto absolute mt-1 z-10 bg-white space-y-2 border-2 rounded-md" v-if="isOpen">
        <li
          class="px-5 hover:bg-neutral-300 cursor-pointer rounded-md"
          :class="time === item.slice(0, 2) && 'bg-primary text-neutral-50 hover:bg-primary'"
          @click="onItem(item)"
          v-for="item in items"
        >
          {{ item }}
        </li>
      </ul>
    </TransitionFade>
  </div>
</template>
