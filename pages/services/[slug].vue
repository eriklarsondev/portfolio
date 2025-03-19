<template>
  <div>
    <InteriorPageHero heading="Web services" :headline="data.name" />

    <Container>
      <div class="flex lg:flex-row flex-col gap-20">
        <div class="flex-1">
          <Subheading label="At a glance" class="[&]:mb-1" data-aos="fade-down" :data-aos-delay="1000">
            <template v-slot:icon>
              <font-awesome icon="clipboard" />
            </template>
          </Subheading>

          <div class="leading-9 font-serif" v-html="data.content" data-aos="fade-right" :data-aos-delay="1000"></div>
        </div>

        <div class="lg:w-64 w-full"></div>
      </div>
    </Container>

    <SlantedContainer>
      <Testimonials />
    </SlantedContainer>

    <Container ref="anchor">
      <CalendlyEmbed />
    </Container>
  </div>
</template>

<script setup>
const route = useRoute()

const { data } = await useFetch(`/api/services/${route.params.slug}`)

useSeoMeta({
  titleTemplate: `${
    data.value && data.value.seo ? data.value.seo.title : data.value ? data.value.name : null
  } | Web Services`,
  description: data.value && data.value.seo ? data.value.seo.description : null
})
</script>
