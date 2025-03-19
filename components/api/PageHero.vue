<template>
  <div class="page-hero relative mb-10 pt-20 pb-10">
    <Container class="relative">
      <div v-if="data">
        <Subheading :label="data.name" class="[&]:mb-1" data-aos="fade-down">
          <template v-slot:icon>
            <font-awesome icon="terminal" />
          </template>
        </Subheading>

        <Heading :label="data.headline" class="[&]:m-0" data-aos="fade-right" />

        <UtilityMenu :items="data.controls" class="mt-8" v-if="data.controls && data.controls.length" />
      </div>

      <Error v-if="!data">{{ props.slug }} was not found</Error>
    </Container>
  </div>
</template>

<script setup>
const props = defineProps(['slug'])

const { data } = await useFetch(`/api/pages/${props.slug}`)

useSeoMeta({
  title: data.value && data.value.seo ? data.value.seo.title : data.value ? data.value.name : null,
  description: data.value && data.value.seo ? data.value.seo.description : null
})
</script>

<style lang="scss" scoped>
.page-hero::before {
  @apply absolute content-[''] bottom-0 md:left-1/2 left-1/3 w-screen h-screen;

  background-image: radial-gradient(circle at 1px 1px, #52525b 1px, transparent 0);
  background-size: 30px 30px;
}
</style>
