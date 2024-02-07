<script lang="ts" setup>
const promos: ICard[] = [
  {
    id: '',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'A Survey Into More Sustainable Ways to Practice Dental Hygiene',
    slug: '',
    image: '',
    link: 'dental-health-and-sustainability',
    isPublished: true,
  },
  {
    id: '',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'Employee Portraits – Get to Know Ella and Cedric',
    slug: '',
    image: '',
    link: 'dentures-and-transplants-what-is-covered-by-the-insurance',
    isPublished: true,
  },
  {
    id: '',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'Tooth Enamel: What It Is and How Important It Is to Protect It',
    slug: '',
    image: '',
    link: 'employee-portraits-get-to-know-ella-and-cedric',
    isPublished: true,
  },
  {
    id: '',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: '“Is it okay if our intern watches?” Why we value teaching.',
    slug: '',
    image: '',
    link: 'have-you-had-your-checkup-this-year-stay-on-top',
    isPublished: true,
  },
  {
    id: '',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'Have you had your checkup this year? Stay on top.',
    slug: '',
    image: '',
    link: 'is-it-ok-if-our-intern-watches-why-we-value-teaching',
    isPublished: true,
  },
  {
    id: '',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'We Are Going on Vacation – Closed Office During the First Week of July',
    slug: '',
    image: '',
    link: 'tooth-enamel-what-it-is-and-how-important-it-is-to-protect-it',
    isPublished: true,
  },
  {
    id: '',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'When You Need a Fixed Denture and not an Implant',
    slug: '',
    image: '',
    link: 'we-are-going-on-vacation-closed-office-during-the-first-week-of-july',
    isPublished: true,
  },
  {
    id: '',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'Candid – Our New Teeth Whitening Technology',
    slug: '',
    image: '',
    link: 'candid-our-new-teeth-whitening-technology',
    isPublished: true,
  },
]
</script>

<template>
  <div class="grid grid-cols-1 px-5 sm:px-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
    <template v-for="(item, i) in promos">
      <UiCard v-if="i < 4" :item="item" item-type="promo" />
    </template>
  </div>
</template>

<style scoped></style>
