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
const route = useRoute()

let url = '/api/projects?featured=true'
if (route.params.slug) {
  url += `&skip=${route.params.slug}`
}

const { data } = await useFetch(url)

const config = {
  itemsToShow: 2,
  gap: 20,
  autoplay: 3000,
  pauseAutoplayOnHover: true,
  wrapAround: true,
  breakpoints: {
    0: {
      itemsToShow: 1
    },
    968: {
      itemsToShow: 1.25
    },
    1024: {
      itemsToShow: 1.5
    },
    1280: {
      itemsToShow: 2
    }
  }
}
</script>
