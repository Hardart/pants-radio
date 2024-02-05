<script lang="ts" setup></script>

<template>
  <Section padding="none">
    <div class="pt-4">
      <SocialIcons class="justify-end text-primary" hover-color="primary" />
    </div>
  </Section>
  <Section padding="small">
    <SectionTitle title="Новинки Радио ШТАНЫ" />
    <TrackList />
  </Section>
  <Section>
    <SectionTitle title="Новости" />
    <NewsLatest />
  </Section>
  <Section>
    <SectionTitle title="Акции и конкурсы" />
    <PromotionsList />
  </Section>
  <Section>
    <SectionTitle title="Лица Радиостанции" />
    <TeamList />
  </Section>
</template>
