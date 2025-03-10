<template>
  <div class="flex gap-5">
    <div
      v-for="(item, index) in props.items"
      :key="index"
      :class="{ 'sm:block hidden': index > 0 }"
      data-aos="fade-up"
      :data-aos-delay="(index + 1) * 300">
      <Button :label="item.label" :url="item.url" :tab="item.newTab" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['items'])
</script>
