<template>
  <div
    class="error relative z-10 p-2 text-center uppercase tracking-widest bg-red-400/30 font-medium text-xs text-red-400">
    <font-awesome icon="triangle-exclamation" /> <slot />
  </div>
</template>

<style lang="scss" scoped>
.error {
  &::before,
  &::after {
    @apply absolute content-[''];
  }

  &::before {
    @apply top-0 left-0 w-[3px] h-full bg-red-400 rounded-l-full;
  }

  &::after {
    @apply bottom-0 right-0 border-t-[15px] border-r-[15px] border-t-transparent border-r-black;
  }
}
</style>
