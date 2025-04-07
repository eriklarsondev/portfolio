<template>
  <div class="lg:text-justify leading-9 tracking-wide text-zinc-300">
    <div v-html="props.html"></div>
  </div>
</template>

<script setup>
const props = defineProps(['html'])
</script>
