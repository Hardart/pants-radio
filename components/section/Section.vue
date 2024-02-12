<script setup lang="ts">
enum Color {
  default = 'section-default',
  primary = 'section-primary',
  secondary = 'section-secondary',
  muted = 'section-muted',
}

enum PaddingY {
  large = 'py-12 md:py-16 lg:py-20',
  default = 'py-8 md:py-14 lg:py-16',
  small = 'py-4 md:py-6 lg:py-8',
  none = '',
}
withDefaults(
  defineProps<{
    color?: 'primary' | 'secondary' | 'muted'
    padding?: 'none' | 'small' | 'large'
    img?: string
    expand?: boolean
    expandRight?: boolean
    noContainer?: boolean
    paddingTopRemove?: boolean
    paddingBottomRemove?: boolean
  }>(),
  {
    expand: false,
    paddingTopRemove: false,
  }
)
</script>

<template>
  <section
    class="section bg-cover bg-no-repeat relative"
    :class="[Color[color || 'default'], PaddingY[padding || 'default'], paddingTopRemove && '!pt-0', paddingBottomRemove && '!pb-0']"
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
