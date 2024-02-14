<script lang="ts" setup></script>

<template>
  <Section padding="topSmall">
    <div class="flex">
      <div class="xl:w-3/5">
        <SectionTitle title="Контакты" />
        <h3 class="text-4xl text-neutral-400/80 font-bold mb-8">Федеральная редакция</h3>
        <div class="grid md:grid-cols-2 gap-y-10">
          <div>
            <h4 class="flex items-center text-2xl mb-4 font-bold gap-x-4"><Icon name="ph:phone-call-light" size="30" />Телефоны</h4>
            <div class="flex flex-col text-secondary">
              <a class="hover:text-primary" href="tel:+74951284394">+7 (495) 128-43-94 (Офис/Реклама)</a>
              <a class="hover:text-primary" href="tel:+74951284325">+7 (495) 128-43-25 (Эфир)</a>
              <a class="hover:text-primary" href="tel:+79374343373">+7 (937) 434-33-73 (WhatsApp и SMS)</a>
            </div>
          </div>
          <div>
            <h4 class="flex items-center text-2xl mb-4 font-bold gap-x-4"><Icon name="ph:map-pin-light" size="30" />Адрес</h4>
            <p>
              <span class="text-nowrap">442761, Пензенская обл.</span>, <span class="text-nowrap">Бессоновский район</span>,
              <span class="text-nowrap">село Чемодановка</span>, <span class="text-nowrap">ул. Средняя, д. 12</span>
            </p>
          </div>
          <div>
            <h4 class="flex items-center text-2xl mb-4 font-bold gap-x-4">
              <Icon name="ph:envelope-simple-light" size="30" />Электронная почта
            </h4>
            <div class="flex flex-col text-secondary">
              <a class="hover:text-primary" href="mailto:info@radioshtani.ru">info@radioshtani.ru (Служба информации)</a>
              <a class="hover:text-primary" href="mailto:press-rel@radioshtani.ru">press-rel@radioshtani.ru (Пресс-релизы)</a>
              <a class="hover:text-primary" href="mailto:edition@radioshtani.ru">edition@radioshtani.ru (Редакция радиоканала)</a>
              <a class="hover:text-primary" href="mailto:songs@radioshtani.ru">songs@radioshtani.ru (Музыкальная редакция)</a>
              <a class="hover:text-primary" href="mailto:onair@radioshtani.ru">onair@radioshtani.ru (Прямой эфир)</a>
            </div>
          </div>
        </div>
        <h3 class="text-4xl text-neutral-400/80 font-bold mb-6 mt-8 pt-6 border-t-2">
          Рекламная служба <span class="text-nowrap">«Радио ШТАНЫ»</span>
        </h3>
        <p class="text-sm mb-6">По всем вопросам размещения рекламы на «Радио ШТАНЫ» в регионах сейлз-хаус медиахолдинга «LOLAMEDIA»:</p>
        <div class="grid grid-cols-2 gap-y-10">
          <div>
            <h4 class="flex items-center text-2xl mb-4 font-bold gap-x-4"><Icon name="ph:phone-call-light" size="30" />Телефоны</h4>
            <a class="text-secondary hover:text-primary" href="tel:+74951284394">+7 (495) 128-43-94 (Офис/Реклама)</a>
          </div>

          <div>
            <h4 class="flex items-center text-2xl mb-4 font-bold gap-x-4"><Icon name="ph:envelope-simple-light" size="30" />E-mail</h4>
            <a class="text-secondary hover:text-primary" href="mailto:adv@elarin.ru">adv@elarin.ru</a>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
