<script lang="ts" setup></script>

<template>
  <footer class="relative top-20 text-neutral-50 bg-secondary">
    <Section padding="small">
      <FooterSocialContacts />
      <div class="flex max-sm:flex-col items-center max-sm:space-y-8">
        <FooterLogo />
        <FooterContacts />
      </div>
    </Section>
    <Section padding="small" padding-top-remove>
      <div class="divide-y-2 divide-neutral-700/60">
        <FooterLicenseInfo />
        <FooterSmsInfo />
      </div>
    </Section>
  </footer>
</template>

<style scoped></style>
