<script lang="ts" setup>
const { footer } = useMeta()
</script>

<template>
  <footer class="relative top-20 overflow-hidden bg-secondary text-neutral-50">
    <Section padding="small">
      <FooterSocialContacts />
      <div class="flex items-center max-sm:flex-col max-sm:space-y-8">
        <FooterLogo />
        <FooterContacts :contacts="footer.contacts" />
      </div>
    </Section>
    <Section padding="small" padding-top-remove>
      <div class="divide-y-2 divide-neutral-700/60">
        <FooterLicenseInfo :info="footer.licenseInfo" />
        <FooterSmsInfo :info="footer.smsInfo" />
      </div>
    </Section>
  </footer>
</template>

<style scoped></style>
