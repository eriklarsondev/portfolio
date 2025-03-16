<template>
  <div>
    <div
      class="relative sm:h-[45vw] md:min-h-[600px] sm:min-h-[500px] min-h-[unset] max-h-[800px] md:my-32 my-20 bg-zinc-900"
      v-if="data">
      <div
        class="absolute top-0 left-0 w-full h-full md:bg-fixed bg-cover bg-left-top grayscale"
        :style="{ backgroundImage: `url(${data.image.url})` }"
        v-if="data.image"></div>

      <div class="flex justify-center sm:items-end items-center sm:absolute w-full h-full top-0 left-0 bg-black/20">
        <Container class="relative py-20 sm:text-center">
          <Heading :cta="true" class="[&]:m-0" data-aos="fade-down">
            <div v-html="data.heading"></div>
          </Heading>
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
