<template>
  <div>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-8" v-if="data && data.length">
      <div
        v-for="(item, index) in data"
        :key="index"
        :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        :data-aos-delay="(index + 1) * 100">
        <Project :data="item" />
      </div>
    </div>

    <Error v-if="!data || !data.length">Projects not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/projects?featured=true')
</script>
