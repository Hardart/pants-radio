<script setup lang="ts">
const date = defineModel({ default: new Date() })
const { custom } = useDates()
const target = ref()
const [isOpen, toggle] = useToggle()
onClickOutside(target, () => (isOpen.value = false))
</script>

<template>
  <div class="relative z-10" ref="target">
    <div class="flex items-center justify-center px-3 gap-x-2 h-10 btn-primary rounded-lg z-20" @click="toggle()">
      <Icon name="material-symbols:calendar-today-outline-rounded" size="25" class="mb-0.5" />
      <div class="text-lg">{{ custom(date).date }}</div>
    </div>
    <div>
      <TransitionFade>
        <div class="absolute left-0 top-full mt-1 bg-white border-2 rounded-lg" v-if="isOpen">
          <UiDatePicker v-model="date" @close="toggle" />
        </div>
      </TransitionFade>
    </div>
  </div>
</template>
