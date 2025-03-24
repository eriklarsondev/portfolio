<template>
  <div class="flex flex-wrap">
    <div v-for="(item, index) in props.items" :key="index" class="uppercase tracking-widest font-normal text-sm">
      {{ item }}<span class="mx-1 text-zinc-500" v-if="index < props.items.length - 1">/</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['items'])
</script>
