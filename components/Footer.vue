<script lang="ts" setup></script>

<template>
  <div class="relative top-20 text-neutral-50 bg-secondary">
    <Section>
      <div class="flex items-center">
        <div class="grid place-items-center w-2/5">
          <Logo size="150" />
          <p class="mt-4">© {{ new Date().getFullYear() }} «Радио ШТАНЫ» 12+</p>
        </div>
        <div class="px-4 w-3/5 space-y-2">
          <div class="">
            <div class="font-medium">Телефон прямого эфира:</div>
            <a href="tel:+74951284325" class="text-neutral-400">+7 (495) 128 43 25</a>
          </div>
          <div class="">
            <div class="font-medium">Единый номер WhatsApp и SMS (услуга платная*):</div>
            <a href="tel:+79374343373" class="text-neutral-400">+7 (937) 434 3373</a>
          </div>
          <div class="">
            <div class="font-medium">E-mail прямого эфира:</div>
            <a href="mailto:onair@radioshtani.ru" class="text-neutral-400">onair@radioshtani.ru</a>
          </div>
          <div class="">
            <div class="font-medium">Телефон редакции:</div>
            <a href="tel:+74951284394" class="text-neutral-400">+7 (495) 128 43 94</a>
          </div>
          <div class="">
            <div class="font-medium">Адрес редакции:</div>
            <a href="https://yandex.ru/maps/-/CCUV4-V91C" class="text-neutral-400"
              >Пензенская область, Бессоновский район, село Чемодановка, ул. Средняя, д. 12</a
            >
          </div>
          <div class="">
            <div class="font-medium">Техническая поддержка сайта:</div>
            <a href="mailto:help@elarin.ru" class="text-neutral-400">help@elarin.ru</a>
          </div>
        </div>
      </div>
    </Section>
    <Section padding="small" padding-top-remove>
      <div class="divide-y-2 divide-neutral-700/60">
        <div class="flex items-center px-2 pb-8 space-x-8">
          <UiRateIcon value="12+" />
          <div class="space-y-4 leading-4">
            <p>
              Средство массовой информации «RADIOSHTANI.RU» зарегистрировано 29 марта 2021 г. в форме распространения «Сетевое издание».
              Свидетельство Эл № ФС77-80691 от 29.03.2021 выдано Федеральной службой по надзору в сфере связи, информационных технологий и
              массовых коммуникаций (Роскомнадзор). Для детей старше 12 лет.
            </p>
            <p>
              Средство массовой информации «Радио ШТАНЫ» зарегистрировано 12 октября 2021 г. в форме распространения «Радиоканал».
              Свидетельство Эл № ФС77-82055 от 12.10.2021 выдано Федеральной службой по надзору в сфере связи, информационных технологий и
              массовых коммуникаций (Роскомнадзор). Для детей старше 12 лет.
            </p>
          </div>
        </div>
        <div class="flex items-center px-2 pt-8 space-x-8">
          <UiRateIcon value="i" />
          <div class="space-y-4 leading-4">
            <p>*Стоимость SMS-сообщения согласно тарифу Вашего сотового оператора. Сервис предоставлен ПАО «МЕГАФОН».</p>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<style scoped></style>
