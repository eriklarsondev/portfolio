<template>
  <div>
    <div v-for="(item, index) in data" :key="index" :class="{ 'mb-10': index < data.length - 1 }">
      <Article :data="item" data-aos="fade-right" :data-aos-delay="(index + 1) * 150" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['limit'])

const { data } = await useFetch(`/api/articles?limit=${props.limit}`)
</script>
