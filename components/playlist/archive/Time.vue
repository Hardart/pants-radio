<script setup lang="ts">
import { hoursForSelect, filteredHours } from '@/utils/setHour'
const { current } = useDates()
const date = defineModel<Date>({ required: true })
const hour = defineModel<string>('hour', { required: true })
const [isOpen, toggle] = useToggle()
const timeElement = ref()
onClickOutside(timeElement, () => (isOpen.value = false))

const hours = computed(() => (current().isToday(date.value) ? filteredHours(current().hour) : hoursForSelect))
watch(
  () => current().isToday(date.value),
  () => {
    if (current().isToday(date.value)) hour.value = hours.value.slice(-1)[0]
  }
)

const onTime = (item: string) => {
  hour.value = item
  toggle()
}
</script>

<template>
  <div class="flex items-center gap-x-4">
    <div class="relative" ref="timeElement">
      <div class="btn-primary z-20 flex h-10 items-center justify-center gap-x-2 rounded-lg px-3" @click="toggle()">
        <Icon name="material-symbols:nest-clock-farsight-analog-outline-rounded" size="25" class="mb-0.5" />
        <div class="text-lg">{{ hour }}:00</div>
      </div>
      <TransitionFade>
        <ul class="absolute z-10 mt-1 max-h-56 space-y-1 overflow-y-auto rounded-md border-2 bg-white p-2" v-if="isOpen">
          <li
            class="cursor-pointer rounded-md px-5 hover:bg-neutral-300"
            :class="hour === item && 'bg-primary text-neutral-50 hover:bg-primary'"
            @click="onTime(item)"
            v-for="item in hours"
          >
            {{ item }}:00
          </li>
        </ul>
      </TransitionFade>
    </div>
  </div>
</template>

<style></style>
