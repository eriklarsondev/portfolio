<template>
  <div>
    <PageHero slug="get-in-touch" />

    <Container>
      <LinkContainer label="Let's work together" url="/hire">
        <Services />
      </LinkContainer>

      <Separator />

      <Testimonials />
    </Container>

    <SlantedContainer>
      <div class="max-w-3xl mx-auto">
        <Callout :lighten="true" class="mb-8" data-aos="fade-right">
          <Content slug="working-together" />
        </Callout>

        <ContactForm :lighten="true" data-aos="flip-left" />
      </div>
    </SlantedContainer>

    <Container class="mb-20">
      <CalendlyEmbed />
    </Container>

    <RecentPosts />
  </div>
</template>

<script setup>
definePageMeta({ layout: 'basic' })
</script>
