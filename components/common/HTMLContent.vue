<template>
  <div :class="['leading-9 tracking-wider font-extralight text-zinc-300', { 'lg:text-justify': props.justify }]">
    <div v-html="props.html"></div>
  </div>
</template>

<script setup>
const props = defineProps(['html', 'justify'])
</script>
