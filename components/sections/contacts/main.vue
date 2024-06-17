<script lang="ts" setup>
import type { Contacts } from '~/types/contacts'

defineProps<{
  contacts: Contacts
}>()
</script>

<template>
  <Section padding="topSmall">
    <div class="xl:w-3/5">
      <UiPageTitle title="Контакты" />
      <h3 class="mb-8 text-4xl font-bold text-neutral-400/80">Федеральная редакция</h3>
      <div class="grid gap-y-10 md:grid-cols-2">
        <ContactPhones :phones="contacts.phones" />
        <ContactMails :emails="contacts.emails.filter((mail) => mail.showIn.includes('contacts'))" />
      </div>
      <h3 class="mb-6 mt-8 border-t-2 pt-6 text-4xl font-bold text-neutral-400/80">Рекламная служба «Радио ШТАНЫ»</h3>
      <p class="mb-6 text-sm">
        По всем вопросам размещения рекламы на «Радио ШТАНЫ» в регионах сейлз-хаус медиахолдинга «LOLAMEDIA»:
      </p>
    </div>
  </Section>
</template>
