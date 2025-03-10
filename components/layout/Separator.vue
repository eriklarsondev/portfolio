<template>
  <div :class="['separator relative max-w-3xl mx-auto md:my-32 my-20', { lighten: props.lighten }]">
    <hr :class="['m-0 border-t-4', { 'border-zinc-800': props.lighten }]" />
  </div>
</template>

<script setup>
const props = defineProps(['lighten'])
</script>

<style lang="scss" scoped>
.separator {
  &::before {
    @apply absolute content-[''] top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] w-[20px] h-[20px] bg-black border-4 border-zinc-900 rounded-full;
  }

  &.lighten::before {
    @apply bg-zinc-900 border-zinc-800;
  }
}
</style>
