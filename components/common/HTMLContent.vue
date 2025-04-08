<template>
  <div :class="['leading-9 font-thin text-[17.5px] text-zinc-300', { 'lg:text-justify': props.justify }]">
    <div v-html="props.html"></div>
  </div>
</template>

<script setup>
const props = defineProps(['html', 'justify'])
</script>
