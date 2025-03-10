<template>
  <h1 class="mb-8 font-heading font-normal xl:text-6xl md:text-5xl sm:text-4xl text-[7vw]">
    <span class="leading-tight">{{ props.label }}<span class="text-accent">_</span></span>
  </h1>
</template>

<script setup>
const props = defineProps(['label'])
</script>
