<template>
  <div>
    <InteriorHero heading="Web services" :headline="data.name" :description="data.description" :short="true">
      <template v-slot:controls>
        <Button label="Schedule a meeting" @click="scrollTo()" />
      </template>
    </InteriorHero>

    <Container>
      <div class="flex lg:flex-row flex-col gap-20">
        <div class="flex-1">
          <Subheading label="At a glance" class="[&]:mb-1" data-aos="fade-down" :data-aos-delay="1000">
            <template v-slot:icon>
              <font-awesome icon="clipboard" />
            </template>
          </Subheading>

          <HTMLContent :html="data.content" data-aos="fade-right" :data-aos-delay="1000" />
        </div>

        <div class="lg:w-[350px] w-full">
          <Subheading label="Web services" class="lg:block hidden opacity-0" />
          <Heading :muted="true" :cta="true" class="lg:hidden block [&]:mb-5" data-aos="fade-right">
            Web services
          </Heading>

          <VerticalMenu :items="data.relatedServices" base="services" data-aos="fade-left" />
        </div>
      </div>
    </Container>

    <CTA slug="homepage" />

    <Container>
      <Heading :muted="true" :cta="true" class="sm:text-center" data-aos="flip-left">
        Following the<br />digital project lifecycle
      </Heading>

      <Strategies />
    </Container>

    <SlantedContainer>
      <Testimonials />
    </SlantedContainer>

    <Container class="mb-20">
      <div ref="scroll">
        <CalendlyEmbed />
      </div>
    </Container>
  </div>
</template>

<script setup>
const route = useRoute()
const scroll = ref()

const { data } = await useFetch(`/api/services/${route.params.slug}`)

useSeoMeta({
  titleTemplate: `${
    data.value && data.value.seo ? data.value.seo.title : data.value ? data.value.name : null
  } | Web Services`,
  meta: [{ name: 'description', content: data.value && data.value.seo ? data.value.seo.description : null }]
})

function scrollTo() {
  scroll.value.scrollIntoView({ behavior: 'smooth' })
}

definePageMeta({ layout: 'basic' })
</script>
