<template>
  <div class="max-w-3xl mx-auto md:my-32 my-20">
    <hr :class="['m-0 border-t-4', { 'border-zinc-800': props.lighten }]" />
  </div>
</template>

<script setup>
const props = defineProps(['lighten'])
</script>
