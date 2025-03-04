<template>
  <NuxtLink to="/" class="inline-block">
    <img :src="props.src" alt="Erik Larson | Software Engineer" class="w-auto h-auto" />
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['src'])
</script>
