<template>
  <h1 class="mb-8 xl:text-6xl md:text-5xl sm:text-4xl text-3xl">
    <span class="leading-tight">{{ props.label }}<span class="text-accent">_</span></span>
  </h1>
</template>

<script setup>
const props = defineProps(['label'])
</script>
