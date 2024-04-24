<script setup lang="ts">
import { hoursForSelect, filteredHours } from '@/utils/setHour'
const props = defineProps<{ date: Date }>()
const hour = defineModel<string>({ required: true })
const { current } = useDates()
const [isOpen, toggle] = useToggle()
const timeElement = ref()
onClickOutside(timeElement, () => (isOpen.value = false))

const hours = computed(() => (current().isToday(props.date) ? filteredHours(current().hour) : hoursForSelect))
watch(
  () => current().isToday(props.date),
  () => {
    if (current().isToday(props.date)) hour.value = hours.value.slice(-1)[0]
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
      <div class="flex items-center justify-center px-3 gap-x-2 h-10 btn-primary rounded-lg z-20" @click="toggle()">
        <Icon name="material-symbols:nest-clock-farsight-analog-outline-rounded" size="25" class="mb-0.5" />
        <div class="text-lg">{{ hour }}:00</div>
      </div>
      <TransitionFade>
        <ul class="p-2 max-h-56 overflow-y-auto absolute mt-1 z-10 bg-white space-y-1 border-2 rounded-md" v-if="isOpen">
          <li
            class="px-5 hover:bg-neutral-300 cursor-pointer rounded-md"
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
