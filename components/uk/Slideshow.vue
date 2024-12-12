<script setup lang="ts">
import type { Slide } from '~/types/slide'

defineProps<{ slides: Slide[] }>()
const [isShow, toggleShowState] = useToggle()
onMounted(toggleShowState)
const sizes = [
  {
    screen: 500,
    size: '420x180'
  },
  {
    screen: 767,
    size: '624x267'
  },
  {
    screen: 1023,
    size: '752x322'
  },
  {
    screen: 1279,
    size: '1024x439'
  },
  {
    screen: 1545,
    size: '1280x549'
  }
]
</script>

<template>
  <div class="uk-slideshow-items relative">
    <TransitionFade>
      <div uk-slideshow="autoplay:true" v-if="isShow">
        <div class="relative overflow-hidden rounded-lg shadow-lg" tabindex="-1">
          <ul class="uk-slideshow-items relative m-0 touch-pan-y overflow-hidden p-0">
            <li v-for="slide in slides" class="absolute inset-0 overflow-hidden will-change-transform [&:not(.uk-active)]:hidden">
              <picture>
                <source
                  v-for="item in sizes"
                  :srcset="setSlideshowSrcset(slide.src, item.size)"
                  :media="`(max-width: ${item.screen}px)`"
                />
                <img :src="correctImageSrc(slide.src)" class="size-full object-cover object-center" />
              </picture>
            </li>
          </ul>

          <a class="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white" uk-slideshow-item="previous">
            <Icon name="material-symbols:arrow-back-ios-rounded" size="25" />
          </a>
          <a class="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white" uk-slideshow-item="next">
            <Icon name="material-symbols:arrow-back-ios-rounded" size="25" class="rotate-180" />
          </a>
        </div>

        <ul class="uk-dotnav uk-slideshow-nav mt-5 flex justify-center space-x-3" v-if="slides.length > 1"></ul>
      </div>
    </TransitionFade>
  </div>
</template>

<style>
.uk-dotnav > * > * {
  display: block;
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: 0 0;
  text-indent: 100%;
  overflow: hidden;
  white-space: nowrap;
  border: 1px solid rgba(102, 102, 102, 0.4);
  transition: 0.2s ease-in-out;
  transition-property: background-color, border-color;
}
.uk-dotnav > .uk-active > * {
  background-color: rgba(102, 102, 102, 0.6);
  border-color: transparent;
}
.uk-slideshow-items {
  width: 100%;
  aspect-ratio: 7 / 3 !important;
}
</style>
