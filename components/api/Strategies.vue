<template>
  <div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-20" v-if="data && data.length">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="text-center"
        data-aos="fade-right"
        :data-aos-delay="(index + 1) * 150">
        <em class="font-serif text-8xl text-accent">0{{ item.order }}</em>

        <h2 class="mt-1 mb-0 text-3xl">{{ item.name }}</h2>
        <span
          class="strategy-content inline-block relative mt-2 ml-3 text-left leading-6 text-sm"
          v-html="item.content"
          v-if="item.content"></span>
      </div>
    </div>

    <Error v-if="!data || !data.length">Strategies not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/strategies')
</script>

<style lang="scss">
.strategy-content {
  &::before {
    @apply absolute content-[''] top-0 -left-3 w-1 h-full bg-zinc-700 rounded-full;
  }

  p {
    @apply m-0;
  }
}
</style>
