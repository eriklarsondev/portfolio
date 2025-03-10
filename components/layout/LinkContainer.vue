<template>
  <div>
    <div class="link-container relative py-10">
      <slot />
    </div>

    <div class="mt-10 text-center" data-aos="fade-up" :data-aos-delay="1000">
      <Button :label="props.label" :url="props.url" :tab="props.tab" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['label', 'url', 'tab'])
</script>

<style lang="scss" scoped>
.link-container::before {
  @apply absolute content-[''] top-0 left-[calc(50%_-_1px)] w-[2px] h-full bg-zinc-900 rounded-full;
}
</style>
