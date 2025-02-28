<template>
  <div class="card relative p-6 bg-black border-2 border-zinc-900">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card::before {
  @apply absolute content-[''] -top-[2px] -left-[3px] w-[4px] h-[calc(100%_+_4px)] bg-accent rounded-full;
}
</style>
