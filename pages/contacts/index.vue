<script lang="ts" setup>
import type { Contacts } from '~/types/contacts';
import { splitTextByComma } from '@/utils/splitTextByComma'
import { onlyNumbers } from '@/utils/parsePhone'

const {data} = await useFetch<Contacts>('/api/v1/contacts')
</script>

<template>
  <Section padding="topSmall">
    <div class="flex">
      <div class="xl:w-3/5" v-if="data">
        <SectionTitle title="Контакты" />
        <h3 class="text-4xl text-neutral-400/80 font-bold mb-8">{{ data.contacts.title }}</h3>
        <div class="grid md:grid-cols-2 gap-y-10">
          <div>
            <h4 class="flex items-center text-2xl mb-4 font-bold gap-x-4"><Icon name="ph:phone-call-light" size="30" />Телефоны</h4>
            <div class="flex flex-col text-secondary">
              <template v-for="item in data.contacts.phones">
                <a class="hover:text-primary" :href="`tel:${onlyNumbers(item.phone)}`" v-if="item.type === 'phone'"  >{{ item.phone }} ({{ item.label }})</a>
              </template>
            </div>
          </div>
          <div>
            <h4 class="flex items-center text-2xl mb-4 font-bold gap-x-4"><Icon name="ph:map-pin-light" size="30" />Адрес</h4>
            <p v-html="splitTextByComma(data.contacts.address)"></p>
          </div>
          <div>
            <h4 class="flex items-center text-2xl mb-4 font-bold gap-x-4">
              <Icon name="ph:envelope-simple-light" size="30" />Электронная почта
            </h4>
            <div class="flex flex-col text-secondary">
              <template v-for="item in data.contacts.emails">
                <a class="hover:text-primary" :href="`mailto:${item.mail}`" v-if="item.type === 'mail'">{{ item.mail }} ({{ item.label }})</a>
              </template>
            </div>
          </div>
        </div>
        <h3 class="text-4xl text-neutral-400/80 font-bold mb-6 mt-8 pt-6 border-t-2">
         {{ data.commercial.title }}
        </h3>
        <p class="text-sm mb-6" v-if="data.commercial.description">{{ data.commercial.description }}:</p>
        <div class="grid grid-cols-2 gap-y-10">
          <div>
            <h4 class="flex items-center text-2xl mb-4 font-bold gap-x-4"><Icon name="ph:phone-call-light" size="30" />Телефоны</h4>
            <template v-for="item in data.commercial.phones">
              <a class="hover:text-primary" :href="`tel:${onlyNumbers(item.phone)}`" v-if="item.type === 'phone'"  >{{ item.phone }} ({{ item.label }})</a>
            </template>
          </div>
          <div>
            <h4 class="flex items-center text-2xl mb-4 font-bold gap-x-4"><Icon name="ph:envelope-simple-light" size="30" />Электронная почта</h4>
            <template v-for="item in data.commercial.emails">
              <a class="hover:text-primary" :href="`mailto:${item.mail}`" v-if="item.type === 'mail'">{{ item.mail }}</a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
