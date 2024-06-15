<script setup lang="ts"></script>

<template>
  <HdrtBreadcrumbs show-home :label-list="['контакты', 'региональное развитие']" />
  <Section padding="bottomSmall">
    <UiPageTitle title="Региональное развитие Радио ШТАНЫ" />
    <p>
      Радио ШТАНЫ начинает развивать свою сеть в регионах. Мы приглашаем всех заинтересованных лиц к сотрудничеству. Для
      подписания договора франшизы, Вам необходимо:
    </p>
    <ul class="list-inside list-disc">
      <li>иметь юридическое лицо, зарегистрированное в соответствие с законодательством РФ</li>
      <li>иметь документы на частоту/действующую радиостанцию</li>
      <li>иметь <span class="cursor-pointer text-primary underline">зарегистрированное СМИ</span></li>
      <li>
        обратиться в отдел дистрибуции Вещательной компании «ELARIN.RU» через
        <span class="cursor-pointer text-primary underline">HelpDesk</span>
      </li>
    </ul>
    <p>В приложении Вы найдете пакет документов, который смог бы Вас заинтересовать:</p>
    <ul class="list-inside list-disc">
      <li class="cursor-pointer text-primary underline">Договор с вещателями Копия</li>
      <li class="cursor-pointer text-primary underline">Свидетельства о регистрации СМИ</li>
    </ul>
    <p>За более подробной информацией об организации ретрансляции Радио ШТАНЫ обращаться к Евгению Ларину</p>
    <p>442761, Пензенскаая обл., Бессоновский р-н, с. Чемодановка, ул. Средняя, д. 12</p>
    <p>Телефон: +7 495 128-43-94</p>
  </Section>
</template>

<style scoped>
p + p:not(:last-child),
ul + p {
  margin-top: 1rem;
}
</style>
