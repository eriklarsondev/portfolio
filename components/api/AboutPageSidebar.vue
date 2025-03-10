<template>
  <div class="w-64 mx-auto text-center">
    <div class="mb-5" data-aos="fade-right" :data-aos-delay="1000">
      <Image :data="data.image" direction="left" :rounded="true" v-if="data.image" />
    </div>

    <div
      v-for="(item, index) in data.topics"
      :key="index"
      :class="{ 'mb-2': index < data.topics.length - 1 }"
      data-aos="zoom-in"
      :data-aos-delay="(index + 1) * 300">
      <Subheading :label="item.label" :muted="true" class="[&]:m-0">
        <template v-slot:icon>
          <font-awesome :icon="item.icon" />
        </template>
      </Subheading>
    </div>

    <hr class="w-1/4 mx-auto" />

    <SocialMediaBar />
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/sidebars/about-page-sidebar')
</script>
