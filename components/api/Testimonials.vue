<template>
  <div>
    <div class="max-w-5xl mx-auto" v-if="data && data.length">
      <Heading label="Delivering proven results" class="[&]:mb-1" />
      <Subheading label="Collaborating with clients all over the country" class="[&]:md:mb-4 [&]:mb-3" />

      <div class="relative">
        <font-awesome icon="quote-left" class="absolute -top-20 lg:-left-10 left-0 opacity-20 text-[10rem]" />

        <Carousel v-bind="config" class="">
          <Slide v-for="(item, index) in data" :key="index" class="flex-col">
            <div
              class="testimonial relative pl-5 lg:leading-8 md:leading-7 leading-6 font-serif lg:text-xl md:text-base text-sm text-neutral-200"
              v-html="item.content"></div>

            <div class="flex items-center gap-2 mt-5">
              <Image :data="item.image" :rounded="true" class="w-[50px] h-[50px]" v-if="item.image" />

              <div>
                <Subheading :label="item.author" class="[&]:mb-1" />
                <Subheading :label="item.company" :muted="true" class="[&]:m-0" />
              </div>
            </div>
          </Slide>
        </Carousel>

        <font-awesome icon="quote-right" class="absolute -bottom-5 lg:-right-10 right-0 opacity-20 text-[10rem]" />
      </div>
    </div>

    <Error v-if="!data || !data.length">Testimonials not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/testimonials')

const config = {
  itemsToShow: 1,
  gap: 100,
  autoplay: 5000,
  wrapAround: true
}
</script>

<style lang="scss">
.testimonial {
  &::before {
    @apply absolute content-[''] top-0 left-0 w-1 h-full bg-zinc-200 rounded-full;
  }

  p:last-of-type {
    @apply m-0;
  }
}
</style>
