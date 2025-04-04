<template>
  <div class="leading-9">
    <div v-html="props.html"></div>
  </div>
</template>

<script setup>
const props = defineProps(['html'])
</script>
