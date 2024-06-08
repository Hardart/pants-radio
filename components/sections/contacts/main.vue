<script lang="ts" setup>
import type { Contacts } from '~/types/contacts'
import { splitTextByComma } from '@/utils/splitTextByComma'
import { onlyNumbers } from '@/utils/parsePhone'

const data = inject<Contacts>('base-contacts')
</script>

<template>
  <Section padding="topSmall">
    <div class="xl:w-3/5" v-if="data">
      <!-- <SectionTitle title="Контакты" /> -->
      <UiPageTitle title="Контакты" />
      <h3 class="mb-8 text-4xl font-bold text-neutral-400/80">{{ data.contacts.title }}</h3>
      <div class="grid gap-y-10 md:grid-cols-2">
        <div>
          <ContactsTitle type="phone" />
          <div class="flex flex-col text-secondary">
            <ContactsPhone v-for="phone in data.contacts.phones" :contact="phone" />
          </div>
        </div>
        <div>
          <ContactsTitle type="address" />
          <p v-html="splitTextByComma(data.contacts.address)"></p>
        </div>
        <div>
          <ContactsTitle type="mail" />
          <div class="flex flex-col text-secondary">
            <ContactsMail v-for="mail in data.contacts.emails" :contact="mail" />
          </div>
        </div>
      </div>
      <h3 class="mb-6 mt-8 border-t-2 pt-6 text-4xl font-bold text-neutral-400/80">
        {{ data.commercial.title }}
      </h3>
      <p class="mb-6 text-sm" v-if="data.commercial.description">{{ data.commercial.description }}:</p>
      <div class="grid grid-cols-2 gap-y-10">
        <div>
          <ContactsTitle type="phone" />
          <ContactsPhone v-for="phone in data.commercial.phones" :contact="phone" />
        </div>
        <div>
          <ContactsTitle type="mail" />
          <ContactsMail v-for="mail in data.commercial.emails" :contact="mail" />
        </div>
      </div>
    </div>
  </Section>
</template>
