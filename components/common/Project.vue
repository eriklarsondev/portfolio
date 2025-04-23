<template>
  <div
    class="project relative xl:h-[30vw] lg:h-96 md:h-[50vw] sm:h-[70vw] h-auto sm:max-h-[500px] overflow-hidden bg-zinc-900 rounded-sm">
    <div
      class="image absolute top-0 left-0 w-full h-full lg:bg-zinc-900/40 bg-zinc-900/70 bg-blend-multiply bg-cover bg-center grayscale transition-all duration-500"
      :style="{ backgroundImage: `url(${props.data.image.url})` }"
      v-if="props.data.image"></div>

    <div
      class="top lg:flex hidden flex-col justify-end absolute top-0 left-0 w-full h-full xl:p-10 p-6 transition-all duration-500">
      <h2 class="mb-1 text-3xl">{{ props.data.name }}</h2>
      <Subheading :label="props.data.platform" class="[&]:m-0">
        <template v-slot:icon>
          <font-awesome icon="laptop" />
        </template>
      </Subheading>
    </div>

    <div
      class="bottom flex flex-col justify-end sm:absolute relative lg:top-full top-0 left-0 w-full h-full xl:p-10 px-6 sm:py-6 pt-40 pb-6 transition-all duration-500">
      <div>
        <ListGroup :items="props.data.technologies" class="mb-5" v-if="props.data.technologies" />

        <Subheading :label="props.data.name" class="[&]:mb-1" />
        <span class="block leading-7 font-serif text-zinc-300">
          {{ props.data.description ? props.data.description : '&mdash;' }}
        </span>

        <div class="lg:mt-8 mt-5" v-if="props.data.content">
          <Button label="Learn More" :url="`/portfolio/${props.data.slug}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
</script>

<style lang="scss" scoped>
.project:hover {
  .image {
    @apply bg-zinc-900/70;
  }

  .top {
    @apply -left-full;
  }

  .bottom {
    @apply top-0 lg:backdrop-blur;
  }
}
</style>
