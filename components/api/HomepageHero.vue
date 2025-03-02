<template>
  <div class="homepage-hero relative mb-20 pt-20 pb-10">
    <div class="container relative max-w-[1260px]">
      <div class="max-w-3xl">
        <Subheading label="Technical focus" class="[&]:mb-1">
          <template v-slot:icon>
            <font-awesome icon="terminal" />
          </template>
        </Subheading>
        <ListGroup :items="['Node.js', 'Vue', 'WordPress', 'Strapi']" class="mb-5" />

        <TypedHeading slug="homepage-hero" class="mb-3" />
        <Callout>
          <Content slug="homepage-hero" />
        </Callout>

        <div class="flex items-center sm:gap-8 gap-5 mt-8">
          <div>
            <Button label="Let's connect" url="/contact" />
          </div>

          <div>|</div>

          <div>
            <SocialMediaBar />
          </div>
        </div>
      </div>
    </div>
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
  @apply absolute content-[''] bottom-0 left-1/2 w-screen h-screen;

  background-image: radial-gradient(circle at 1px 1px, #52525b 1px, transparent 0);
  background-size: 30px 30px;
}
</style>
