<template>
  <div>
    <PageHero slug="web-services" />

    <Container>
      <Services class="mb-40" />

      <Heading :muted="true" :cta="true" class="[&]:mb-2" data-aos="flip-left">
        Following the<br />digital project lifecycle
      </Heading>
      <Content slug="digital-project-lifecycle" :long="true" class="[&]:mb-8" data-aos="fade-right" />

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
