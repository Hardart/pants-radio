<script setup lang="ts">
import { hoursForSelect } from '@/utils/setHour'
const time = defineModel('time', { type: String, required: true })
const target = ref()
const [isOpen, toggle] = useToggle()
onClickOutside(target, () => (isOpen.value = false))
const onItem = (item: string) => {
  time.value = item
  toggle()
}
</script>

<template>
  <div class="relative" ref="target">
    <div class="flex items-center justify-center px-3 gap-x-2 h-10 btn-primary rounded-lg z-20" @click="toggle()">
      <Icon name="material-symbols:nest-clock-farsight-analog-outline-rounded" size="25" class="mb-0.5" />
      <div class="text-lg">{{ time }}:00</div>
    </div>
    <TransitionFade>
      <ul class="p-2 max-h-56 overflow-y-auto absolute mt-1 z-10 bg-white space-y-1 border-2 rounded-md" v-if="isOpen">
        <li
          class="px-5 hover:bg-neutral-300 cursor-pointer rounded-md"
          :class="time === item && 'bg-primary text-neutral-50 hover:bg-primary'"
          @click="onItem(item)"
          v-for="item in hoursForSelect"
        >
          {{ item }}:00
        </li>
      </ul>
    </TransitionFade>
  </div>
</template>
