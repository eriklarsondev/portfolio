<template>
  <div>
    <PageHero slug="get-in-touch" />

    <div class="container max-w-[1260px]">
      <Services />
    </div>

    <SlantedContainer>
      <div class="max-w-3xl mx-auto">
        <Callout :dark="true" class="mb-8">
          <Content slug="working-together" />
        </Callout>

        <ContactForm :dark="true" />
      </div>
    </SlantedContainer>

    <div class="container max-w-[1260px]">
      <CalendlyEmbed />
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'basic' })
</script>
