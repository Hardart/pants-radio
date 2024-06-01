<script lang="ts" setup>
import type { Contacts } from '~/types/contacts'
import { splitTextByComma } from '@/utils/splitTextByComma'
import { onlyNumbers } from '@/utils/parsePhone'

const { data } = useAsyncData<Contacts>('contacts', () => $fetch('/api/v1/contacts'))
</script>

<template>
  <Section padding="topSmall">
    <div class="xl:w-3/5" v-if="data">
      <!-- <SectionTitle title="Контакты" /> -->
      <UiPageTitle title="Контакты" />
      <h3 class="mb-8 text-4xl font-bold text-neutral-400/80">{{ data.contacts.title }}</h3>
      <div class="grid gap-y-10 md:grid-cols-2">
        <div>
          <h4 class="mb-4 flex items-center gap-x-4 text-2xl font-bold"><Icon name="ph:phone-call-light" size="30" />Телефоны</h4>
          <div class="flex flex-col text-secondary">
            <template v-for="item in data.contacts.phones">
              <a class="hover:text-primary" :href="`tel:${onlyNumbers(item.phone)}`" v-if="item.type === 'phone'">
                {{ item.phone }} ({{ item.label }})
              </a>
            </template>
          </div>
        </div>
        <div>
          <h4 class="mb-4 flex items-center gap-x-4 text-2xl font-bold"><Icon name="ph:map-pin-light" size="30" />Адрес</h4>
          <p v-html="splitTextByComma(data.contacts.address)"></p>
        </div>
        <div>
          <h4 class="mb-4 flex items-center gap-x-4 text-2xl font-bold">
            <Icon name="ph:envelope-simple-light" size="30" />Электронная почта
          </h4>
          <div class="flex flex-col text-secondary">
            <template v-for="item in data.contacts.emails">
              <a class="hover:text-primary" :href="`mailto:${item.mail}`" v-if="item.type === 'mail'">
                {{ item.mail }} ({{ item.label }})
              </a>
            </template>
          </div>
        </div>
      </div>
      <h3 class="mb-6 mt-8 border-t-2 pt-6 text-4xl font-bold text-neutral-400/80">
        {{ data.commercial.title }}
      </h3>
      <p class="mb-6 text-sm" v-if="data.commercial.description">{{ data.commercial.description }}:</p>
      <div class="grid grid-cols-2 gap-y-10">
        <div>
          <h4 class="mb-4 flex items-center gap-x-4 text-2xl font-bold"><Icon name="ph:phone-call-light" size="30" />Телефоны</h4>
          <template v-for="item in data.commercial.phones">
            <a class="hover:text-primary" :href="`tel:${onlyNumbers(item.phone)}`" v-if="item.type === 'phone'">
              {{ item.phone }} ({{ item.label }})
            </a>
          </template>
        </div>
        <div>
          <h4 class="mb-4 flex items-center gap-x-4 text-2xl font-bold">
            <Icon name="ph:envelope-simple-light" size="30" />Электронная почта
          </h4>
          <template v-for="item in data.commercial.emails">
            <a class="hover:text-primary" :href="`mailto:${item.mail}`" v-if="item.type === 'mail'">{{ item.mail }}</a>
          </template>
        </div>
      </div>
    </div>
  </Section>
</template>
