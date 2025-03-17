<template>
  <div
    :class="[
      'callout relative sm:ml-3 sm:p-5 p-4 backdrop-blur',
      { 'bg-zinc-900': !props.lighten, 'lighten bg-zinc-800': props.lighten }
    ]">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps(['lighten'])
</script>

<style lang="scss">
.callout {
  &::before,
  &::after {
    @apply absolute content-[''];
  }

  &::before {
    @apply top-0 sm:-left-3 left-0 w-1 h-full bg-accent rounded-l-full;
  }

  &::after {
    @apply bottom-0 right-0 sm:border-t-[40px] border-t-[30px] sm:border-r-[40px] border-r-[30px] border-t-transparent border-r-black;
  }

  p {
    @apply leading-7 font-serif text-zinc-300;
  }

  p:last-of-type {
    @apply mb-0;
  }

  &.lighten::after {
    @apply border-r-zinc-900;
  }
}
</style>
