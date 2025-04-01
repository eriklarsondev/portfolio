<template>
  <div>
    <InteriorHero :image="data.image" heading="Portfolio" :headline="data.name" :description="data.description">
      <template v-slot:controls>
        <Button label="Let's work together" @click="scrollTo()" />
      </template>
    </InteriorHero>

    <Container>
      <div class="flex lg:flex-row flex-col-reverse gap-20">
        <div class="flex-1">
          <Subheading label="Project overview" class="[&]:mb-1" data-aos="fade-down" :data-aos-delay="1000">
            <template v-slot:icon>
              <font-awesome icon="clipboard" />
            </template>
          </Subheading>

          <div data-aos="fade-right" :data-aos-delay="1000">
            <div class="leading-9 tracking-wide text-[15px]" v-html="data.content"></div>
          </div>
        </div>

        <div class="xl:w-[500px] lg:w-[400px] w-full">
          <Image :data="data.image" class="lg:-mt-28 mb-10" data-aos="fade-left" v-if="data.image" />

          <Subheading label="Technologies" class="[&]:mb-1" data-aos="fade-right" :data-aos-delay="1000">
            <template v-slot:icon>
              <font-awesome icon="code" />
            </template>
          </Subheading>

          <ListGroup :items="data.technologies" data-aos="fade-left" />

          <Button label="View project" :url="data.url" :tab="true" class="mt-10" data-aos="fade-up" v-if="data.url" />
        </div>
      </div>
    </Container>

    <Container class="[&]:max-w-[1600px] mt-40">
      <Heading :muted="true" :cta="true" class="text-center" data-aos="zoom-in-down">
        Project <span class="sm:inline hidden">& client</span> spotlight
      </Heading>

      <ProjectCarousel />
    </Container>

    <SlantedContainer>
      <Testimonials />
    </SlantedContainer>

    <Container>
      <div ref="scroll">
        <Heading label="Expert web services" :muted="true" :cta="true" class="text-center" data-aos="zoom-in-down" />

        <Services />
      </div>
    </Container>
  </div>
</template>

<script setup>
const route = useRoute()
const scroll = ref()

const { data } = await useFetch(`/api/projects/${route.params.slug}`)

useSeoMeta({
  titleTemplate: `${
    data.value && data.value.seo ? data.value.seo.title : data.value ? data.value.name : null
  } | Portfolio`,
  description: data.value && data.value.seo ? data.value.seo.description : null
})

function scrollTo() {
  scroll.value.scrollIntoView({ behavior: 'smooth' })
}
</script>
