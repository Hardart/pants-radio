<script setup lang="ts"></script>

<template>
  <div class="relative mb-6 flex items-center justify-center gap-x-10 max-sm:mt-4 max-sm:flex-col max-sm:gap-y-4 sm:min-h-20">
    <div class="glow text-center text-sm">
      <p class="font-medium uppercase tracking-wider">добавляй нас в соцсетях</p>
      <p class="text-primary">и будь в курсе всех событий</p>
    </div>
    <div class="relative">
      <SocialIcons />
    </div>
  </div>
</template>

<style>
.glow::before {
  content: '';
  display: block;
  position: absolute;
  width: 150px;
  height: 30px;
  left: 50%;
  top: -160px;
  transform: translate(-50%, -50%);
  border-radius: 80%;
  mix-blend-mode: lighten;
  box-shadow:
    0px 190px 60px 10px rgba(242, 183, 73, 0.17),
    0px 190px 100px 40px rgba(242, 183, 73, 0.1);
}
</style>
