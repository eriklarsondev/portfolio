<template>
  <div class="slanted-container relative xl:my-32 my-20 xl:py-32 py-20">
    <Container class="relative z-10">
      <slot />
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.slanted-container {
  &::before,
  &::after {
    @apply absolute content-[''] left-0 w-screen h-3/4 bg-zinc-900;
  }

  &::before {
    @apply top-0 -skew-y-[2deg];
  }

  &::after {
    @apply bottom-0 skew-y-[2deg];
  }
}
</style>
