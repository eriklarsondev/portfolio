<template>
  <div>
    <div v-if="data && data.length">
      <div v-for="(item, index) in props.data" :key="index" :class="{ 'mb-10': index < data.length - 1 }">
        <Post :data="item" data-aos="fade-right" :data-aos-delay="(index + 1) * 100" />
      </div>
    </div>

    <Error v-if="!data || !data.length">Articles not found</Error>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
</script>
