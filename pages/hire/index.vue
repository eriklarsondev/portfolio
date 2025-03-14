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

    <HireCTA
      image="https://images.pexels.com/photos/11988945/pexels-photo-11988945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

    <Container>
      <Testimonials />
    </Container>

    <SlantedContainer>
      <div class="max-w-3xl mx-auto">
        <Heading label="Let's work together" class="[&]:mb-3" data-aos="flip-left" />
        <Callout :lighten="true" class="mb-8" data-aos="fade-right">
          <Content slug="hire-me" />
        </Callout>

        <ContactForm :lighten="true" data-aos="flip-left" />
      </div>
    </SlantedContainer>

    <Container>
      <CalendlyEmbed />
    </Container>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'basic' })
</script>
