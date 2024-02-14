<script lang="ts" setup>
const promos: ICard[] = [
  {
    preview: '',
    category: {
      title: 'Категория конкурса',
      slug: 'promo-slug',
    },
    createdAt: '2023-11-13T15:41:08.359Z',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'A Survey Into More Sustainable Ways to Practice Dental Hygiene',
    slug: '',
    image: '',
    url: '',
    isPublished: true,
  },
  {
    preview: '',
    category: {
      title: 'Категория конкурса',
      slug: 'promo-slug',
    },
    createdAt: '2023-11-13T15:41:08.359Z',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'Employee Portraits – Get to Know Ella and Cedric',
    slug: '',
    image: '',
    url: '',
    isPublished: true,
  },
  {
    preview: '',
    category: {
      title: 'Категория конкурса',
      slug: 'promo-slug',
    },
    createdAt: '2023-11-13T15:41:08.359Z',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'Tooth Enamel: What It Is and How Important It Is to Protect It',
    slug: '',
    image: '',
    url: '',
    isPublished: true,
  },
  {
    preview: '',
    category: {
      title: 'Категория конкурса',
      slug: 'promo-slug',
    },
    createdAt: '2023-11-13T15:41:08.359Z',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: '“Is it okay if our intern watches?” Why we value teaching.',
    slug: '',
    image: '',
    url: '',
    isPublished: true,
  },
  {
    preview: '',
    category: {
      title: 'Категория конкурса',
      slug: 'promo-slug',
    },
    createdAt: '2023-11-13T15:41:08.359Z',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'Have you had your checkup this year? Stay on top.',
    slug: '',
    image: '',
    url: '',
    isPublished: true,
  },
  {
    preview: '',
    category: {
      title: 'Категория конкурса',
      slug: 'promo-slug',
    },
    createdAt: '2023-11-13T15:41:08.359Z',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'We Are Going on Vacation – Closed Office During the First Week of July',
    slug: '',
    image: '',
    url: '',
    isPublished: true,
  },
  {
    preview: '',
    category: {
      title: 'Категория конкурса',
      slug: 'promo-slug',
    },
    createdAt: '2023-11-13T15:41:08.359Z',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'When You Need a Fixed Denture and not an Implant',
    slug: '',
    image: '',
    url: '',
    isPublished: true,
  },
  {
    preview: '',
    category: {
      title: 'Категория конкурса',
      slug: 'promo-slug',
    },
    createdAt: '2023-11-13T15:41:08.359Z',
    text: 'Зарегистрируйся и отправь своё новогоднее поздравление, чтобы получить два билета на премьеру фильма!',
    title: 'Candid – Our New Teeth Whitening Technology',
    slug: '',
    image: '',
    url: '',
    isPublished: true,
  },
]
</script>

<template>
  <div class="grid grid-cols-1 px-5 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-3 md:gap-6 lg:gap-4">
    <template v-for="(item, i) in promos">
      <UiCard v-if="i < 4" :item="item" item-type="promo" />
    </template>
  </div>
</template>

<style scoped></style>
