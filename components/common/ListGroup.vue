<template>
  <div class="flex flex-wrap gap-1">
    <div
      v-for="(item, index) in props.items"
      :key="index"
      class="uppercase tracking-widest font-medium text-[11.5px]"
      data-aos="fade-in"
      :data-aos-delay="(index + 1) * 300">
      {{ item }}
      <span class="text-zinc-500" v-if="index < props.items.length - 1">/</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['items'])
</script>
