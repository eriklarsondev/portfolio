<template>
  <div>
    <PageHero slug="web-services" />

    <div class="container max-w-[1260px]">
      <Services />
    </div>

    <SlantedContainer>
      <div class="max-w-3xl mx-auto">
        <Heading label="Let's work together" />

        <ContactForm />

        <Separator class="[&]:my-20" />

        <Testimonials />
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
