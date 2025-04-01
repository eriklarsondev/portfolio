<template>
  <div
    :class="[
      'image-container relative',
      {
        'direction left': props.direction && props.direction === 'left',
        'direction right': props.direction && props.direction === 'right'
      }
    ]">
    <div
      :class="['relative z-10 bg-cover grayscale', { 'rounded-full': props.rounded }]"
      :style="{ backgroundImage: `url(${props.data.url})` }">
      <img :src="props.data.url" :alt="props.data.alternativeText" class="opacity-0" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['data', 'direction', 'rounded'])
</script>

<style lang="scss" scoped>
.image-container {
  &::before,
  &::after {
    @apply absolute content-[''];
  }

  &::before {
    @apply top-[calc(50%_-_1rem)] w-screen h-[2rem] bg-accent;
  }

  &::after {
    @apply z-10 top-0 left-0 w-full h-full;
  }

  &:not(.direction)::before {
    @apply hidden;
  }

  &.direction.left::before {
    @apply right-1/2;
  }

  &.direction.right::before {
    @apply left-1/2;
  }
}
</style>
