<template>
  <div class="flex flex-wrap gap-1">
    <div v-for="(item, index) in props.items" :key="index" class="uppercase tracking-widest font-medium text-[11.5px]">
      {{ item }}
      <span class="text-zinc-500" v-if="index < props.items.length - 1">/</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['items'])
</script>
