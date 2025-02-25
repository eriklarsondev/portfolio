<template>
  <div class="flex gap-5">
    <div v-for="(item, index) in props.items" :key="index">
      <Button :label="item.label" :url="item.url" :tab="item.newTab" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['items'])
</script>
