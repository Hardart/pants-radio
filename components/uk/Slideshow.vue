<script setup lang="ts">
import type { Slide } from '~/types/slide'

defineProps<{ slides: Slide[] }>()
const [isShow, toggleShowState] = useToggle()
onMounted(toggleShowState)
</script>

<template>
  <div class="relative h-96">
    <TransitionFade>
      <div uk-slideshow="autoplay:true" v-if="isShow">
        <div class="relative overflow-hidden rounded-lg shadow-lg" tabindex="-1">
          <ul class="uk-slideshow-items relative m-0 max-h-96 touch-pan-y overflow-hidden p-0">
            <li v-for="slide in slides" class="absolute inset-0 overflow-hidden will-change-transform [&:not(.uk-active)]:hidden">
              <img :src="correctImageSrc(slide.src)" class="h-full w-full object-cover object-center" alt="" uk-cover />
            </li>
          </ul>

          <a class="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white" uk-slideshow-item="previous">
            <Icon name="material-symbols:arrow-back-ios-rounded" size="25" />
          </a>
          <a class="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white" uk-slideshow-item="next">
            <Icon name="material-symbols:arrow-back-ios-rounded" size="25" class="rotate-180" />
          </a>
        </div>

        <ul class="uk-dotnav uk-slideshow-nav my-5 flex justify-center space-x-3"></ul>
      </div>
      <div v-else class="absolute h-full w-full rounded-lg bg-neutral-200"></div>
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
</style>
