<template>
  <div class="homepage-hero relative mb-28 pt-20 pb-10">
    <Container class="relative">
      <div class="flex gap-20">
        <div class="flex-1 max-w-3xl">
          <ListGroup :items="['Web Design', 'App Development', 'SEO']" class="mb-5" data-aos="fade-down" />

          <TypedHeading slug="homepage-hero" class="mb-1" />
          <Callout data-aos="fade-right">
            <Content slug="homepage-hero" />
          </Callout>

          <div class="flex items-center sm:gap-8 gap-5 mt-8">
            <div>
              <Button label="Let's connect" url="/contact" data-aos="fade-up" />
            </div>

            <div class="sm:block hidden">|</div>

            <div class="sm:block hidden">
              <SocialMediaBar />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/pages/home')

useSeoMeta({
  title: data.value && data.value.seo ? data.value.seo.title : data.value ? data.value.name : null,
  description: data.value && data.value.seo ? data.value.seo.description : null
})
</script>

<style lang="scss" scoped>
.homepage-hero::before {
  @apply absolute content-[''] bottom-0 md:left-1/2 left-1/3 w-screen h-screen;

  background-image: radial-gradient(circle at 1px 1px, #52525b 1px, transparent 0);
  background-size: 30px 30px;
}
</style>
