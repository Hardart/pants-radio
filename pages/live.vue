<script lang="ts" setup></script>

<template>
  <Section>
    <UiPageTitle title="Прямая видеотрансляция из студии Радио ШТАНЫ" />
    <h3 class="text-2xl font-medium">Круглосуточное вещание</h3>
    <p class="mb-2 text-xl">По выходным, с 18 до 20 часов (МСК) - смотри вечернее «Шоу Без Названия» с Евгением Богомоловым</p>
    <div class="mb-2 grid aspect-video">
      <iframe
        src="https://vk.com/video_ext.php?oid=-183424859&id=456239140&hd=3&autoplay=1"
        width="1920"
        height="1080"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
        frameborder="0"
        allowfullscreen
        class="rounded-xl md:rounded-2xl"
        style="width: 100%; height: auto; aspect-ratio: 16 / 9"
      ></iframe>
    </div>
    <p>
      Поддержи нас! Твоя финансовая помощь поможет нам реализовать идеи и достичь новых высот. Каждый вклад имеет значение.
      Поддержка проекта по
      <NuxtLink target="_blank" to="https://netmonet.co/tip/835248?o=6" class="text-primary">ссылке</NuxtLink>
    </p>
  </Section>
</template>

<style scoped></style>
