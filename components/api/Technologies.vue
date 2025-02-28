<template>
  <div class="grid md:grid-cols-5 grid-cols-3 lg:gap-5 gap-3">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="tech relative lg:py-10 md:py-7 sm:py-10 py-5 px-5 text-center bg-zinc-900">
      <i :class="['lg:text-5xl md:text-4xl sm:text-5xl text-4xl text-accent', item.icon]"></i>
      <Subheading :label="item.name" :muted="true" class="mt-1 [&]:mb-0 [&]:text-[11px]" />
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/technologies')
</script>

<style lang="scss" scoped>
.tech {
  &::before,
  &::after {
    @apply absolute content-[''];
  }

  &::before {
    @apply top-0 left-0 border-b-[20px] border-l-[20px] border-b-transparent border-l-zinc-950;
  }

  &::after {
    @apply bottom-0 right-0 lg:border-t-[40px] border-t-[20px] lg:border-r-[40px] border-r-[20px] border-t-transparent border-r-zinc-950;
  }
}
</style>
