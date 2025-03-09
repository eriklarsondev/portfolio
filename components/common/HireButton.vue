<template>
  <NuxtLink
    :to="props.url"
    :target="!props.tab ? '_self' : '_blank'"
    class="inline-flex items-center relative h-[40px] px-10 uppercase tracking-widest bg-accent font-medium text-xs text-black hover:-translate-y-2 transition-all duration-300">
    <span class="relative">
      <div class="mr-1" v-if="slots.icon">
        <slot name="icon" />
      </div>
      {{ props.label }}
    </span>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['label', 'url', 'tab'])
const slots = useSlots()
</script>

<style lang="scss" scoped>
a {
  &::before,
  &::after {
    @apply absolute content-[''] transition-all duration-300;
  }

  &::before {
    @apply top-[calc(50%_-_1px)] left-0 w-4 h-[2px] bg-black;
  }

  &::after {
    @apply bottom-0 right-0 border-t-[15px] border-r-[15px] border-t-transparent border-r-black;
  }
}
</style>
