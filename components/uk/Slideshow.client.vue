<script setup lang="ts"></script>

<template>
  <div uk-slideshow="autoplay:true">
    <div class="relative" tabindex="-1">
      <ul class="uk-slideshow-items relative m-0 p-0 overflow-hidden touch-pan-y max-h-96">
        <li v-for="i in 4" class="absolute inset-0 overflow-hidden will-change-transform [&:not(.uk-active)]:hidden">
          <img :src="`/images/gallery/gallery-0${i + 1}.webp`" class="object-cover object-top h-full w-full" alt="" uk-cover />
        </li>
      </ul>

      <a class="absolute top-1/2 -translate-y-1/2 left-0 p-4 text-white" uk-slidenav-previous uk-slideshow-item="previous"></a>
      <a class="absolute top-1/2 -translate-y-1/2 right-0 p-4 text-white" uk-slidenav-next uk-slideshow-item="next"></a>
    </div>

    <ul class="my-5 flex uk-dotnav uk-slideshow-nav space-x-3 justify-center"></ul>
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
