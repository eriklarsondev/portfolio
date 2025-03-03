<template>
  <div>
    <div class="max-w-4xl mx-auto" v-if="data && data.length">
      <Heading label="Delivering proven results" class="[&]:mb-1" />
      <Subheading label="Collaborating with clients all over the country" class="[&]:mb-4" />

      <div class="relative">
        <font-awesome icon="quote-left" class="absolute -top-20 -left-10 opacity-20 text-[10rem]" />

        <Carousel v-bind="config" class="">
          <Slide v-for="(item, index) in data" :key="index" class="flex-col">
            <div
              class="testimonial relative pl-5 sm:leading-7 leading-6 font-serif sm:text-base text-sm text-neutral-200"
              v-html="item.content"></div>

            <div class="flex gap-2">
              <Image :data="item.image" :rounded="true" class="w-[50px] h-[50px]" v-if="item.image" />

              <div>
                <h3 class="m-0">{{ item.author }}</h3>
                <Subheading :label="item.company" :muted="true" class="[&]:m-0" />
              </div>
            </div>
          </Slide>
        </Carousel>

        <font-awesome icon="quote-right" class="absolute -bottom-5 -right-10 opacity-20 text-[10rem]" />
      </div>
    </div>

    <Error v-if="!data || !data.length">Testimonials not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/testimonials')

const config = {
  itemsToShow: 1,
  gap: 30,
  autoplay: 5000,
  wrapAround: true
}
</script>

<style lang="scss" scoped>
.testimonial {
  &::before {
    @apply absolute content-[''] top-0 left-0 w-1 h-full bg-zinc-200 rounded-full;
  }

  p:last-of-type {
    @apply mb-0;
  }
}
</style>
