<script lang="ts" setup></script>

<template>
  <Section>
    <UiPageTitle title="Прямая видеотрансляция из студии Радио ШТАНЫ" />
    <h3 class="text-2xl font-medium">Круглосуточное вещание</h3>
    <p class="mb-2 text-xl">По выходным, с 18 до 20 часов (МСК) - смотри вечернее «Шоу Без Названия» с Евгением Богомоловым</p>
    <div class="mb-2 grid aspect-video">
      <iframe
        src="https://rtmp.elarin.ru/9a24ac22-44d2-4847-a795-5459531ec880.html"
        width="1920"
        height="1080"
        frameborder="no"
        scrolling="no"
        allowfullscreen="true"
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
