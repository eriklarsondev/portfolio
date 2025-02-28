<template>
  <div :class="['callout relative sm:ml-3 sm:p-5 p-4 bg-zinc-900', { alternate: props.alternate }]">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps(['alternate'])
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
    @apply leading-normal font-serif sm:text-[15px] text-[13.5px] text-zinc-200;
  }

  &.alternate::after {
    @apply border-r-zinc-950;
  }
}
</style>
