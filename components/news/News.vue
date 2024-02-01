<script setup lang="ts">
const news = [
  {
    date: 'JULY 28, 2021',
    title: 'A Survey Into More Sustainable Ways to Practice Dental Hygiene',
    image: '',
    link: 'dental-health-and-sustainability',
  },
  {
    date: 'JULY 27, 2021',
    title: 'Employee Portraits – Get to Know Ella and Cedric',
    image: '',
    link: 'dentures-and-transplants-what-is-covered-by-the-insurance',
  },
  {
    date: 'JULY 22, 2021',
    title: 'Tooth Enamel: What It Is and How Important It Is to Protect It',
    image: '',
    link: 'employee-portraits-get-to-know-ella-and-cedric',
  },
  {
    date: 'JULY 12, 2021',
    title: '“Is it okay if our intern watches?” Why we value teaching.',
    image: '',
    link: 'have-you-had-your-checkup-this-year-stay-on-top',
  },
  {
    date: 'JULY 06, 2021',
    title: 'Have you had your checkup this year? Stay on top.',
    image: '',
    link: 'is-it-ok-if-our-intern-watches-why-we-value-teaching',
  },
  {
    date: 'JUNE 28, 2021',
    title: 'We Are Going on Vacation – Closed Office During the First Week of July',
    image: '',
    link: 'tooth-enamel-what-it-is-and-how-important-it-is-to-protect-it',
  },
  {
    date: 'JUNE 03, 2021',
    title: 'When You Need a Fixed Denture and not an Implant',
    image: '',
    link: 'we-are-going-on-vacation-closed-office-during-the-first-week-of-july',
  },
  {
    date: 'MAY 17, 2021',
    title: 'When Children Start Losing Teeth',
    image: '',
    link: 'when-children-start-losing-teeth',
  },
  {
    date: 'MAY 05, 2021',
    title: 'Dentures and Transplants – What Is Covered by the Insurance',
    image: '',
    link: 'when-you-need-a-fixed-denture-and-not-an-implant',
  },
  {
    date: 'APRIL 26, 2021',
    title: 'Corona Virus Update: A New Hygiene Concept in Our Clinic',
    image: '',
    link: 'corona-virus-update-a-new-hygiene-concept-in-our-clinic',
  },
  {
    date: 'APRIL 13, 2021',
    title: 'What to Do When a Dental Emergency Occurs',
    image: '',
    link: 'what-to-do-when-a-dental-emergency-occurs',
  },
  {
    date: 'APRIL 09, 2021',
    title: 'Electric Toothbrushes: Guide to Find the Right One',
    image: '',
    link: 'electric-toothbrushes-guide-to-find-the-right-one',
  },
  {
    date: 'MARCH 30, 2021',
    title: 'Taking Care of Your Teeth (for Kids)',
    image: '',
    link: 'taking-care-of-your-teeth-for-kids',
  },
  {
    date: 'MARCH 22, 2021',
    title: 'Candid – Our New Teeth Whitening Technology',
    image: '',
    link: 'candid-our-new-teeth-whitening-technology',
  },
  {
    date: 'MARCH 15, 2021',
    title: 'Orthodontic Braces: Types, Costs and Pros and Cons',
    image: '',
    link: 'orthodontic-braces-types-costs-and-pros-and-cons',
  },
  {
    date: 'MARCH 08, 2021',
    title: 'What to Look for in Your Dental Insurance',
    image: '',
    link: 'what-to-look-for-in-your-dental-insurance',
  },
  {
    date: 'MARCH 02, 2021',
    title: 'Dental Implants – Interesting Facts You May Not Know',
    image: '',
    link: 'dental-implants-interesting-facts-you-may-not-know',
  },
  {
    date: 'FEBRUARY 26, 2021',
    title: 'Baby Teeth – Right Dental Care From the Beginning',
    image: '',
    link: 'baby-teeth-right-dental-care-from-the-beginning',
  },
]
</script>

<template>
  <div class="grid grid-cols-4 gap-8">
    <template v-for="(item, i) in news">
      <NewsCard v-if="i < 8" :news-item="item" />
    </template>
  </div>
</template>

<style></style>
