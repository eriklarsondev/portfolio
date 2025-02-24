<template>
  <NuxtLink
    :to="props.url"
    :target="!props.tab ? '_self' : '_blank'"
    class="inline-flex items-center relative uppercase tracking-widest font-medium text-xs text-zinc-200 transition-all duration-150">
    <div class="mr-1 text-accent" v-if="slots.prefix">
      <slot name="prefix" />
    </div>
    {{ props.label }}
  </NuxtLink>
</template>

<script setup>
const props = defineProps(['label', 'url', 'tab'])
const slots = useSlots()
</script>

<style lang="scss" scoped>
a {
  &::before {
    @apply absolute content-[''] -bottom-[3px] left-0 w-0 h-[2px] bg-accent rounded-full transition-all duration-150;
  }

  &:not(.router-link-active):hover::before {
    @apply w-full;
  }

  &.router-link-active {
    @apply text-accent;
  }
}
</style>
