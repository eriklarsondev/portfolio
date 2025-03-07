<template>
  <div>
    <PageHero slug="get-in-touch" />

    <div class="container max-w-[1260px]">
      <LinkContainer label="Let's work together" url="/hire">
        <Services />
      </LinkContainer>

      <Separator />

      <Testimonials />
    </div>

    <SlantedContainer>
      <div class="max-w-3xl mx-auto">
        <Callout :alternate="true" class="mb-8">
          <Content slug="working-together" />
        </Callout>

        <ContactForm />
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
