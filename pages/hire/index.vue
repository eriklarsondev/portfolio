<template>
  <div>
    <PageHero slug="web-services" />

    <Container>
      <Services />

      <Separator />

      <Heading :muted="true" :cta="true" class="sm:text-center" data-aos="flip-left">
        Following the<br />digital project lifecycle
      </Heading>

      <Strategies />
    </Container>

    <CTA slug="hire-me" />

    <Container>
      <Testimonials />
    </Container>

    <SlantedContainer>
      <div class="max-w-3xl mx-auto">
        <Heading label="Let's work together" class="[&]:mb-1" data-aos="flip-left" />
        <Callout :lighten="true" class="mb-8" data-aos="fade-right">
          <Content slug="hire-me" />
        </Callout>

        <ContactForm :lighten="true" data-aos="flip-left" />
      </div>
    </SlantedContainer>

    <Container class="mb-20">
      <CalendlyEmbed />
    </Container>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'basic' })
</script>
