<template>
  <div class="page-hero relative mb-10 pt-20 pb-10">
    <div class="container relative max-w-[1260px]">
      <div v-if="data">
        <Subheading :label="data.name" class="[&]:mb-1" />
        <Heading :label="data.headline" class="[&]:m-0" />
      </div>

      <Error v-if="!data">{{ props.slug }} was not found</Error>
    </div>
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
  @apply absolute content-[''] bottom-0 left-1/2 w-screen h-screen;

  background-image: radial-gradient(circle at 1px 1px, #3f3f46 1px, transparent 0);
  background-size: 40px 40px;
}
</style>
