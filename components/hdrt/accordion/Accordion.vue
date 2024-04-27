<script setup lang="ts">
const { items } = defineProps<{
  items: any[]
  titleKey: string
  bodyKey: string
}>()
const emit = defineEmits(['on-click'])
const accordionState = ref<{ [key: number]: boolean }>({})
const initAccordionState = () => {
  for (let i = 0; i < items.length; i++) {
    accordionState.value[i] = false
  }
}
const toggleItemState = (index: number) => (accordionState.value[index] = !accordionState.value[index])
const onLink = () => {
  emit('on-click')
  initAccordionState()
}
</script>

<template>
  <ul class="divide-y-2 divide-neutral-100/20 px-4">
    <li class="cursor-pointer py-4" v-for="(item, index) in items">
      <div class="flex items-center justify-between px-4" @click.self.prevent="toggleItemState(index)">
        <NuxtLink :to="item.link" class="text-2xl font-semibold text-neutral-50 first-letter:uppercase" @click.capture="onLink">{{
          item[titleKey]
        }}</NuxtLink>
        <Icon
          name="mdi:chevron-up"
          class="text-stone-600"
          :class="accordionState[index] && 'rotate-180'"
          size="30"
          @click="toggleItemState(index)"
        />
      </div>
      <TransitionExpand>
        <ul class="mb-4 mt-4 space-y-4 text-neutral-50/40" v-if="accordionState[index] && item[bodyKey]">
          <li class="relative px-4" v-for="child in item[bodyKey]">
            <NuxtLink class="flex" :to="child.link" @click="onLink">{{ child[titleKey] }}</NuxtLink>
          </li>
        </ul>
      </TransitionExpand>
    </li>
  </ul>
</template>

<style></style>
