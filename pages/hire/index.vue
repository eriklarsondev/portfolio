<template>
  <div>
    <PageHero slug="web-services" />

    <div class="container max-w-[1260px]">
      <Services />

      <Separator />

      <Testimonials />
    </div>

    <SlantedContainer>
      <div class="max-w-3xl mx-auto">
        <Heading label="Let's work together" data-aos="fade-right" />

        <ContactForm :lighten="true" data-aos="flip-left" />
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
