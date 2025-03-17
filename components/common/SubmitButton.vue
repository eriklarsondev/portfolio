<template>
  <button
    type="submit"
    class="inline-flex items-center relative h-[60px] px-8 overflow-hidden uppercase tracking-widest font-medium text-sm text-accent hover:text-black border-2 border-accent transition-all duration-300">
    <span class="relative"><font-awesome icon="paper-plane" class="mr-1" /> Send a message</span>
  </button>
</template>

<style lang="scss" scoped>
button {
  &::before {
    @apply absolute content-[''] top-full left-0 w-full h-full bg-accent transition-all duration-300;
  }

  &:hover::before {
    @apply top-0;
  }
}
</style>
