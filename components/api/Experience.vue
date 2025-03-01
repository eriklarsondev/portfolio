<template>
  <div>
    <div class="experience-timeline relative" v-if="data && data.length"></div>

    <Error v-if="!data || !data.length">Experience not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/work')
</script>
