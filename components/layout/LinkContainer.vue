<template>
  <div>
    <slot />

    <div class="mt-20 text-center" data-aos="zoom-in-up">
      <Button :label="props.label" :url="props.url" :tab="props.tab" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['label', 'url', 'tab'])
</script>
