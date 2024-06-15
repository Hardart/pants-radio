<script lang="ts" setup>
import type { Contacts } from '~/types/contacts'

const contacts = inject<Contacts>('base-contacts')
const commersial = inject<Contacts>('commersial-contacts')
if (!contacts || !commersial) throw createError('Cant inject base contacts')
const contactsKeys = Object.keys(contacts) as Array<keyof typeof contacts>
</script>

<template>
  <Section padding="topSmall">
    <div class="xl:w-3/5">
      <UiPageTitle title="Контакты" />
      <h3 class="mb-8 text-4xl font-bold text-neutral-400/80">Федеральная редакция</h3>
      <div class="grid gap-y-10 md:grid-cols-2">
        <div v-for="key in contactsKeys">
          <ContactTitle :type="key" v-if="contacts[key].length" />
          <div class="flex flex-col text-secondary">
            <Contact v-for="item in contacts[key]" :contact="item" />
          </div>
        </div>
      </div>
      <h3 class="mb-6 mt-8 border-t-2 pt-6 text-4xl font-bold text-neutral-400/80">Рекламная служба «Радио ШТАНЫ»</h3>
      <p class="mb-6 text-sm">
        По всем вопросам размещения рекламы на «Радио ШТАНЫ» в регионах сейлз-хаус медиахолдинга «LOLAMEDIA»:
      </p>

      <div v-for="key in contactsKeys">
        <ContactTitle :type="key" v-if="commersial[key].length" />
        <div class="flex flex-col text-secondary">
          <Contact v-for="item in commersial[key]" :contact="item" />
        </div>
      </div>
    </div>
  </Section>
</template>
