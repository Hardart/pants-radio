<script setup lang="ts">
const news: ICard[] = [
  {
    id: '',
    createdAt: 'JULY 28, 2021',
    title: 'A Survey Into More Sustainable Ways to Practice Dental Hygiene',
    image: '',
    link: 'dental-health-and-sustainability',
    slug: '',
    isPublished: true,
  },
  {
    id: '',
    createdAt: 'JULY 27, 2021',
    title: 'Employee Portraits – Get to Know Ella and Cedric',
    image: '',
    link: 'dentures-and-transplants-what-is-covered-by-the-insurance',
    slug: '',
    isPublished: true,
  },
  {
    id: '',
    createdAt: 'JULY 22, 2021',
    title: 'Tooth Enamel: What It Is and How Important It Is to Protect It',
    image: '',
    link: 'employee-portraits-get-to-know-ella-and-cedric',
    slug: '',
    isPublished: true,
  },
  {
    id: '',
    createdAt: 'JULY 12, 2021',
    title: '“Is it okay if our intern watches?” Why we value teaching.',
    image: '',
    link: 'have-you-had-your-checkup-this-year-stay-on-top',
    slug: '',
    isPublished: true,
  },
  {
    id: '',
    createdAt: 'JULY 06, 2021',
    title: 'Have you had your checkup this year? Stay on top.',
    image: '',
    link: 'is-it-ok-if-our-intern-watches-why-we-value-teaching',
    slug: '',
    isPublished: true,
  },
  {
    id: '',
    createdAt: 'JUNE 28, 2021',
    title: 'We Are Going on Vacation – Closed Office During the First Week of July',
    image: '',
    link: 'tooth-enamel-what-it-is-and-how-important-it-is-to-protect-it',
    slug: '',
    isPublished: true,
  },
  {
    id: '',
    createdAt: 'JUNE 03, 2021',
    title: 'When You Need a Fixed Denture and not an Implant',
    image: '',
    link: 'we-are-going-on-vacation-closed-office-during-the-first-week-of-july',
    slug: '',
    isPublished: true,
  },
  {
    id: '',
    createdAt: 'MAY 17, 2021',
    title: 'When Children Start Losing Teeth',
    image: '',
    link: 'when-children-start-losing-teeth',
    slug: '',
    isPublished: true,
  },
  {
    id: '',
    createdAt: 'MAY 05, 2021',
    title: 'Dentures and Transplants – What Is Covered by the Insurance',
    image: '',
    link: 'when-you-need-a-fixed-denture-and-not-an-implant',
    slug: '',
    isPublished: true,
  },
  {
    id: '',
    createdAt: 'APRIL 26, 2021',
    title: 'Corona Virus UpcreatedAt: A New Hygiene Concept in Our Clinic',
    image: '',
    link: 'corona-virus-update-a-new-hygiene-concept-in-our-clinic',
    slug: '',
    isPublished: true,
  },
  {
    id: '',
    createdAt: 'APRIL 13, 2021',
    title: 'What to Do When a Dental Emergency Occurs',
    image: '',
    link: 'what-to-do-when-a-dental-emergency-occurs',
    slug: '',
    isPublished: true,
  },
  {
    id: '',
    createdAt: 'APRIL 09, 2021',
    title: 'Electric Toothbrushes: Guide to Find the Right One',
    image: '',
    link: 'electric-toothbrushes-guide-to-find-the-right-one',
    slug: '',
    isPublished: true,
  },
  {
    id: '',
    createdAt: 'MARCH 30, 2021',
    title: 'Taking Care of Your Teeth (for Kids)',
    image: '',
    link: 'taking-care-of-your-teeth-for-kids',
    slug: '',
    isPublished: true,
  },
  {
    id: '',
    createdAt: 'MARCH 22, 2021',
    title: 'Candid – Our New Teeth Whitening Technology',
    image: '',
    link: 'candid-our-new-teeth-whitening-technology',
    slug: '',
    isPublished: true,
  },
]
</script>

<template>
  <div class="grid grid-cols-1 px-5 sm:px-0 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
    <template v-for="(item, i) in news">
      <UiCard v-if="i < 8" :item="item" item-type="news" />
    </template>
  </div>
</template>

<style></style>
