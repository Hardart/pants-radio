<script setup lang="ts">
const show = ref(false)
const showToggle = () => (show.value = !show.value)
onMounted(showToggle)
</script>

<template>
  <div class="h-96 relative">
    <TransitionFade>
      <div uk-slideshow="autoplay:true" v-if="show">
        <div class="relative rounded-lg overflow-hidden shadow-lg" tabindex="-1">
          <ul class="uk-slideshow-items relative m-0 p-0 overflow-hidden touch-pan-y max-h-96">
            <li v-for="i in 2" class="absolute inset-0 overflow-hidden will-change-transform [&:not(.uk-active)]:hidden">
              <img :src="`/images/gallery/${i}.webp`" class="object-cover object-center h-full w-full" alt="" uk-cover />
            </li>
          </ul>

          <a class="absolute top-1/2 -translate-y-1/2 left-0 p-4 text-white" uk-slideshow-item="previous">
            <Icon name="material-symbols:arrow-back-ios-rounded" size="25" />
          </a>
          <a class="absolute top-1/2 -translate-y-1/2 right-0 p-4 text-white" uk-slideshow-item="next">
            <Icon name="material-symbols:arrow-back-ios-rounded" size="25" class="rotate-180" />
          </a>
        </div>

        <ul class="my-5 flex uk-dotnav uk-slideshow-nav space-x-3 justify-center"></ul>
      </div>
      <div v-else class="absolute w-full h-full bg-neutral-200 rounded-lg"></div>
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
