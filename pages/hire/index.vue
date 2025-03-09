<template>
  <div>
    <PageHero slug="web-services" />

    <div class="container max-w-[1260px]">
      <Services />

      <Separator :lighten="true" />

      <Testimonials />
    </div>

    <SlantedContainer>
      <div class="max-w-3xl mx-auto">
        <Heading label="Let's work together" />

        <ContactForm :lighten="true" />
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
