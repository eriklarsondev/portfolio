<template>
  <div class="homepage-hero relative mb-10 pt-20 pb-10">
    <div class="container relative max-w-[1260px]">
      <div class="max-w-3xl">
        <Subheading label="Technical focus" />
        <ListGroup :items="['Node.js', 'Vue', 'WordPress', 'Strapi']" class="mb-5" />

        <TypedHeading slug="homepage-hero" class="mb-3" />
        <Content slug="homepage-hero" />
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

  background-image: radial-gradient(circle at 1px 1px, #3f3f46 1px, transparent 0);
  background-size: 40px 40px;
}
</style>
