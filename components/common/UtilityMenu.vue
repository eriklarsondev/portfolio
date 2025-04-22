<template>
  <div class="inline-flex gap-5">
    <div
      v-for="(item, index) in props.items"
      :key="index"
      :class="{ 'sm:block hidden': index > 0 }"
      data-aos="fade-up"
      :data-aos-delay="(index + 1) * 100">
      <Button :label="item.label" :url="item.url" :tab="item.newTab" v-if="!props.cta" />
      <CTAButton :label="item.label" :url="item.url" :tab="item.newTab" v-if="props.cta" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['items', 'cta'])
</script>
