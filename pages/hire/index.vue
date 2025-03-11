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
        <Heading label="Let's work together" class="[&]:mb-3" data-aos="flip-left" />
        <Callout :lighten="true" class="mb-8" data-aos="fade-right">
          <Content slug="hire-me" />
        </Callout>

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
