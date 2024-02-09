<script setup lang="ts">
const { menuList } = defineProps<{
  menuList: IMenuItem[]
}>()
defineEmits(['toggle'])
const accordionState = ref<{ [key: number]: boolean }>({})
for (let i = 0; i < menuList.length; i++) {
  accordionState.value[i] = false
}
</script>

<template>
  <div class="relative flex-grow block lg:hidden">
    <div class="absolute inset-0 overflow-auto">
      <ul class="divide-y-2 px-4 divide-neutral-100/20">
        <li class="py-4 cursor-pointer" v-for="(menuItem, index) in menuList">
          <div class="flex justify-between items-center px-4" @click="accordionState[index] = !accordionState[index]">
            <p class="text-neutral-50 text-2xl font-semibold first-letter:uppercase">{{ menuItem.label }}</p>
            <Icon name="mdi:chevron-up" class="text-stone-600" :class="accordionState[index] && 'rotate-180'" size="30" />
          </div>
          <TransitionExpand>
            <ul class="mb-4 mt-2 space-y-3 text-neutral-50/40" v-if="accordionState[index] && menuItem.childrens">
              <li class="px-4" v-for="child in menuItem.childrens">
                <NuxtLink :to="child.link" @click="$emit('toggle')">{{ child.label }}</NuxtLink>
              </li>
            </ul>
          </TransitionExpand>
        </li>
      </ul>
    </div>
  </div>
</template>
