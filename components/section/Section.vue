<script setup lang="ts">
type Padding = 'none' | 'small' | 'large' | 'topSmall' | 'bottomSmall' | 'topLarge' | 'bottomLarge' | 'top' | 'bottom' | 'default'

enum Color {
  default = 'section-default',
  primary = 'section-primary',
  secondary = 'section-secondary',
  muted = 'section-muted',
}

enum PaddingY {
  large = 'py-12 md:py-16 lg:py-20',
  topLarge = 'pt-12 md:pt-16 lg:pt-20',
  bottomLarge = 'pb-12 md:pb-16 lg:pb-20',
  default = 'py-8 md:py-14 lg:py-16',
  top = 'pt-8 md:pt-14 lg:pt-16',
  bottom = 'pb-8 md:pb-14 lg:pb-16',
  small = 'py-4 md:py-6 lg:py-8',
  topSmall = 'pt-4 md:pt-6 lg:pt-8',
  bottomSmall = 'pb-4 md:pb-6 lg:pb-8',
  none = '',
}
withDefaults(
  defineProps<{
    color?: 'primary' | 'secondary' | 'muted'
    padding?: Padding
    img?: string
    expand?: boolean
    expandRight?: boolean
    noContainer?: boolean
  }>(),
  {
    expand: false,
    paddingTopRemove: false,
    paddingSide: 'both',
    padding: 'default',
  }
)
</script>

<template>
  <section
    class="section bg-cover bg-no-repeat relative"
    :class="[Color[color || 'default'], PaddingY[padding]]"
    :style="[img ? `background-image: url(/images/sections/${img})` : '']"
  >
    <slot v-if="noContainer" />
    <div v-else class="container mx-auto px-2">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.expand-right {
  max-width: calc(50% + (1360px / 2) - 40px);
}
</style>
