<template>
  <div
    class="relative h-[45vw] md:min-h-[600px] sm:min-h-[500px] min-h-[350px] md:my-32 my-20 bg-zinc-900 md:bg-fixed bg-cover bg-left-top grayscale"
    :style="{ backgroundImage: `url(${props.image})` }">
    <div class="flex justify-center items-center absolute w-full h-full top-0 left-0 bg-black/20">
      <div class="container relative max-w-[1260px] py-20 text-center">
        <Heading :cta="true" class="md:block hidden [&]:m-0" data-aos="fade-down">
          Expert web development<br />services in Orlando
        </Heading>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['image'])
</script>
