<script lang="ts" setup>
enum HoverColor {
  neutral = 'hover:text-neutral-200',
  primary = 'hover:text-primary/70',
  default = 'hover:text-neutral-400'
}
defineProps<{
  hoverColor?: 'neutral' | 'primary'
  hideOnSmallScreen?: boolean
}>()
</script>

<template>
  <div class="flex items-center" :class="hideOnSmallScreen && 'max-md:hidden'">
    <a href="https://vk.com/radio_shtani" target="_blank" class="px-3 py-1" :class="HoverColor[hoverColor ?? 'default']">
      <Icon name="akar-icons:vk-fill" size="30" />
    </a>
    <a href="https://t.me/radio_shtani" class="px-3 py-1" :class="HoverColor[hoverColor ?? 'default']">
      <Icon name="mingcute:telegram-fill" size="30" />
    </a>
    <a href="https://wa.me/79374343373" class="px-3 py-1" :class="HoverColor[hoverColor ?? 'default']">
      <Icon name="akar-icons:whatsapp-fill" size="24" />
    </a>
  </div>
</template>
