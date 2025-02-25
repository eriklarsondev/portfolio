<template>
  <NuxtLink
    :to="props.url"
    :target="!props.tab ? '_self' : '_blank'"
    class="inline-flex items-center relative h-[60px] px-5 overflow-hidden uppercase tracking-widest font-medium text-xs text-accent hover:text-black border-2 border-accent transition-all duration-300">
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
  &::before {
    @apply absolute content-[''] top-full left-0 w-full h-full bg-accent transition-all duration-300;
  }

  &:hover::before {
    @apply top-0;
  }
}
</style>
