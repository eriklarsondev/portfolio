<template>
  <div>
    <div
      class="relative lg:h-[45vw] lg:min-h-[600px] min-h-[unset] md:max-h-[800px] md:my-32 my-20 overflow-hidden bg-zinc-900"
      v-if="data">
      <div
        class="absolute top-0 left-0 w-full h-full xl:bg-fixed bg-cover bg-left-top grayscale"
        :style="{ backgroundImage: `url(${data.image.url})` }"
        v-if="data.image"></div>

      <div class="absolute top-0 left-0 w-full h-full bg-black/40" v-if="data.image"></div>

      <div class="flex justify-center md:items-end items-center lg:absolute w-full h-full top-0 left-0">
        <Container class="relative py-20 sm:text-center">
          <Heading :cta="true" class="heading relative [&]:m-0" data-aos="fade-down" v-if="data.heading">
            <div v-html="data.heading"></div>
          </Heading>

          <UtilityMenu :items="data.controls" :cta="true" class="mt-8" v-if="data.controls && data.controls.length" />
        </Container>
      </div>
    </div>

    <Error v-if="!data">{{ props.slug }} was not found</Error>
  </div>
</template>

<script setup>
const props = defineProps(['slug'])

const { data } = await useFetch(`/api/cta/${props.slug}`)
</script>

<style lang="scss" scoped>
.heading::before {
  @apply lg:block hidden absolute content-[''] bottom-[calc(100%_+_30px)] left-0 w-full h-screen;

  background-image: radial-gradient(circle at 1px 1px, #d4d4d8 1px, transparent 0);
  background-size: 30px 30px;
}
</style>
