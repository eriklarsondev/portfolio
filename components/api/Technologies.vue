<template>
  <div>
    <div class="tech-grid grid lg:grid-cols-2 grid-cols-1 relative" v-if="data && data.length">
      <div
        v-for="(item, index) in data"
        :key="index"
        :class="[
          'tech flex lg:items-start items-center lg:gap-5 sm:gap-7 gap-4 relative lg:py-7 py-2',
          { 'lg:pr-7': index % 2 === 0, 'lg:pl-7': index % 2 !== 0 }
        ]">
        <div>
          <i :class="['sm:text-6xl text-5xl text-accent', item.icon]"></i>
        </div>

        <div class="tech-info relative lg:p-0 sm:p-5 p-4 lg:bg-transparent bg-zinc-800 lg:rounded-l-none rounded-l">
          <Subheading :label="item.name" class="[&]:mb-1 [&]:text-zinc-200" />
          <span class="block mb-2 lg:leading-5 sm:leading-6 leading-5 lg:text-sm sm:text-base text-sm">
            {{ item.description ? item.description : '&mdash;' }}
          </span>

          <NavLink label="Learn More" :url="item.url" :tab="true" class="[&]:text-accent" />
        </div>
      </div>
    </div>

    <Error v-if="!data || !data.length">Technologies not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/technologies')
</script>

<style lang="scss" scoped>
.tech-grid::before {
  @apply lg:block hidden absolute content-[''] top-0 left-[calc(50%_-_1px)] w-[2px] h-full bg-zinc-800 rounded-full;
}

.tech {
  &:nth-last-child(n + 3)::before {
    @apply lg:block hidden absolute content-[''] bottom-0 left-0 w-full h-[2px] bg-zinc-800 rounded-full;
  }

  .tech-info {
    &::before,
    &::after {
      @apply absolute content-[''];
    }

    &::before {
      @apply lg:hidden block top-0 left-0 w-1 h-full bg-zinc-500 rounded-l-full;
    }

    &::after {
      @apply bottom-0 right-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-zinc-950;
    }
  }
}
</style>
