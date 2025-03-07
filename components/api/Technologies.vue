<template>
  <div>
    <div class="tech-grid lg:grid block lg:grid-cols-2 grid-cols-1 relative" v-if="data && data.length">
      <div v-for="(item, index) in data" :key="index">
        <div
          :class="[
            'tech flex gap-5 relative lg:py-8',
            { bordered: index < data.length - 2, 'lg:pr-8': index % 2 === 0, 'lg:pl-8': index % 2 !== 0 }
          ]">
          <div>
            <i :class="['text-6xl text-accent', item.icon]"></i>
          </div>

          <div>
            <Subheading :label="item.name" class="[&]:mb-1 [&]:text-zinc-200" />
            <span class="block mb-2 lg:leading-5 sm:leading-6 leading-5 lg:text-sm sm:text-base text-sm">
              {{ item.description ? item.description : '&mdash;' }}
            </span>

            <NavLink label="Learn More" :url="item.url" :tab="true" class="[&]:text-accent" />
          </div>
        </div>

        <hr class="lg:hidden block border-zinc-800" v-if="index < data.length - 1" />
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

.tech.bordered::before {
  @apply lg:block hidden absolute content-[''] bottom-0 left-0 w-full h-[2px] bg-zinc-800 rounded-full;
}
</style>
