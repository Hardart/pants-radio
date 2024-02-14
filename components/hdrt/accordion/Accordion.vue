<script setup lang="ts">
const { items, handler } = defineProps<{
  items: any[]
  titleKey: string
  bodyKey: string
  handler: () => void
}>()
const accordionState = ref<{ [key: number]: boolean }>({})
const initAccordionState = () => {
  for (let i = 0; i < items.length; i++) {
    accordionState.value[i] = false
  }
}
const toggleItemState = (index: number) => (accordionState.value[index] = !accordionState.value[index])
const onLink = () => {
  handler()
  initAccordionState()
}
</script>

<template>
  <ul class="divide-y-2 px-4 divide-neutral-100/20">
    <li class="py-4 cursor-pointer" v-for="(item, index) in items">
      <div class="flex justify-between items-center px-4" @click.self.prevent="toggleItemState(index)">
        <NuxtLink :to="item.link" class="text-neutral-50 text-2xl font-semibold first-letter:uppercase" @click.capture="onLink">{{
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
          <li class="px-4" v-for="child in item[bodyKey]">
            <NuxtLink :to="child.link" @click="onLink">{{ child[titleKey] }}</NuxtLink>
          </li>
        </ul>
      </TransitionExpand>
    </li>
  </ul>
</template>

<style></style>
