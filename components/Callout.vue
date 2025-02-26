<template>
  <div class="callout relative ml-3 sm:p-5 p-4 bg-zinc-900">
    <slot />
  </div>
</template>

<style lang="scss">
.callout {
  &::before,
  &::after {
    @apply absolute content-[''];
  }

  &::before {
    @apply top-0 -left-3 w-1 h-full bg-accent rounded-l-full;
  }

  &::after {
    @apply bottom-0 right-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-black;
  }

  p {
    @apply leading-6 sm:text-[14.5px] text-[14px];
  }
}
</style>
