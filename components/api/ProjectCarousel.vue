<template>
  <div>
    <Carousel v-bind="config">
      <Slide v-for="(item, index) in data" :key="index" class="block">
        <Project :data="item" />
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/projects?featured=true')

const config = {
  itemsToShow: 2,
  gap: 30,
  autoplay: 5000,
  wrapAround: true
}
</script>
