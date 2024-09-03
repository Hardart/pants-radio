<script lang="ts" setup>
const { footerData } = useMeta()
</script>

<template>
  <footer class="relative top-20 mb-36 overflow-hidden bg-secondary text-neutral-50 md:mb-0">
    <Section padding="small">
      <FooterSocialContacts />
      <div class="flex items-center max-sm:flex-col max-sm:space-y-8">
        <FooterLogo />
        <FooterContacts :contact="footerData" />
      </div>
    </Section>
    <Section padding="small" padding-top-remove>
      <div class="divide-y-2 divide-neutral-700/60">
        <FooterLicenseInfo :info="footerData.licenseInfo" />
        <FooterSmsInfo :info="footerData.smsInfo" />
      </div>
    </Section>
  </footer>
</template>
